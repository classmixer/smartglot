/* eslint-env node */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');
const axios = require('axios');

// Initialize Firebase Admin SDK (automatically done in Cloud Functions environment)
try {
  admin.initializeApp();
} catch (e) {
  console.log('Admin SDK already initialized or error:', e);
}

// Initialize Google Cloud Vision client
const visionClient = new vision.ImageAnnotatorClient();

// --- analyzePdf Cloud Function ---
exports.analyzePdf = functions.https.onCall(async (data, context) => {
  // 1. Check Authentication
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'The function must be called while authenticated.',
    );
  }
  const uid = context.auth.token.uid;
  const token = context.rawRequest.headers.authorization?.split('Bearer ')[1];

  // 2. Validate Input Data
  const storagePaths = data.storagePaths; // 단일 storagePath에서 storagePaths 배열로 변경
  const originalFileNames = data.fileNames; // 원본 파일 이름 배열 추가

  if (
    !storagePaths ||
    !Array.isArray(storagePaths) ||
    storagePaths.length === 0
  ) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with a "storagePaths" argument (array of strings).',
    );
  }
  if (
    !originalFileNames ||
    !Array.isArray(originalFileNames) ||
    originalFileNames.length !== storagePaths.length
  ) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with a "fileNames" argument (array of strings) matching storagePaths.',
    );
  }

  console.log(
    `[${uid}] Received request for PDF analysis of ${storagePaths.length} files.`,
  );

  let combinedExtractedText = '';
  const processedStoragePaths = []; // 성공적으로 처리된 파일들의 경로 저장 (오류 시 정리용)

  for (let i = 0; i < storagePaths.length; i++) {
    const storagePath = storagePaths[i];
    const fileName = originalFileNames[i];
    console.log(
      `[${uid}] Processing file ${i + 1}/${storagePaths.length}: ${fileName} (${storagePath})`,
    );

    // 3. Prepare Vision AI Request for each file
    const bucketName = admin.storage().bucket().name;
    const gcsSourceUri = `gs://${bucketName}/${storagePath}`;
    // 각 파일의 OCR 결과를 고유한 경로에 저장 (겹치지 않도록 파일 이름 또는 인덱스 사용)
    const gcsDestinationUri = `gs://${bucketName}/ocr_results/${uid}/${Date.now()}_${fileName.replace(/[^a-zA-Z0-9]/g, '_')}/`;

    const inputConfig = {
      mimeType: 'application/pdf',
      gcsSource: { uri: gcsSourceUri },
    };
    const outputConfig = {
      gcsDestination: { uri: gcsDestinationUri },
      batchSize: 1,
    };
    const features = [{ type: 'DOCUMENT_TEXT_DETECTION' }];
    const visionRequest = {
      requests: [{ inputConfig, features, outputConfig }],
    };

    let extractedTextFromFile = '';
    try {
      // 4. Call Vision AI for each file
      console.log(
        `[${uid}] Starting Vision AI batch processing for ${gcsSourceUri}`,
      );
      const [operation] =
        await visionClient.asyncBatchAnnotateFiles(visionRequest);
      console.log(
        `[${uid}] Vision AI operation for ${fileName} started: ${operation.name}`,
      );
      await operation.promise();
      console.log(`[${uid}] Vision AI operation for ${fileName} completed.`);
      processedStoragePaths.push(storagePath); // 성공 시 경로 추가

      // 5. Get Text from Vision AI Output for each file
      const destinationPrefix = gcsDestinationUri.replace(
        `gs://${bucketName}/`,
        '',
      );
      const [outputFiles] = await admin
        .storage()
        .bucket()
        .getFiles({ prefix: destinationPrefix });

      if (!outputFiles || outputFiles.length === 0) {
        throw new Error(
          `Vision AI did not produce an output file for ${fileName}.`,
        );
      }
      const resultFile = outputFiles.find((file) =>
        file.name.endsWith('.json'),
      );
      if (!resultFile) {
        throw new Error(
          `Could not find the Vision AI JSON output file for ${fileName}.`,
        );
      }

      const [jsonData] = await resultFile.download();
      const result = JSON.parse(jsonData.toString());

      if (
        result.responses &&
        result.responses[0] &&
        result.responses[0].error
      ) {
        const error = result.responses[0].error;
        console.error(
          `[${uid}] Vision AI Error in response for ${fileName}:`,
          error,
        );
        throw new Error(
          `Vision AI processing failed for ${fileName}: ${error.message}`,
        );
      }

      if (
        result.responses &&
        result.responses[0] &&
        result.responses[0].fullTextAnnotation
      ) {
        extractedTextFromFile = result.responses[0].fullTextAnnotation.text;
        console.log(
          `[${uid}] Extracted ${extractedTextFromFile.length} characters from ${fileName}.`,
        );
        combinedExtractedText += extractedTextFromFile + '\n\n'; // 파일 간 구분을 위해 개행 추가
      } else {
        console.warn(
          `[${uid}] No fullTextAnnotation found in Vision AI response for ${gcsSourceUri}`,
        );
      }

      // Clean up individual Vision AI output files
      try {
        console.log(
          `[${uid}] Deleting Vision AI output folder for ${fileName}: ${destinationPrefix}`,
        );
        await admin
          .storage()
          .bucket()
          .deleteFiles({ prefix: destinationPrefix });
      } catch (cleanupError) {
        console.error(
          `Error cleaning up Vision AI output files for ${fileName}:`,
          cleanupError,
        );
      }
    } catch (error) {
      console.error(
        `[${uid}] Error during Vision AI processing for ${storagePath}:`,
        error,
      );
      // 이미 업로드된 원본 PDF는 여기서 삭제하지 않고, 전체 작업 실패 시 일괄 처리 고려
      // 또는, 개별 파일 실패 시 해당 파일만 제외하고 계속 진행할 수도 있음 (현재는 전체 실패로 간주)
      throw new functions.https.HttpsError(
        'internal',
        `Failed to process PDF ${fileName} with Vision AI: ${error.message}`,
      );
    }
  } // End of for loop iterating through storagePaths

  // If no text was extracted from any file, return empty results
  if (!combinedExtractedText.trim()) {
    console.log(
      `[${uid}] No text extracted from any of the PDFs, returning empty results.`,
    );
    // Clean up all uploaded original PDFs if no text was extracted
    try {
      for (const sp of processedStoragePaths) {
        // 성공적으로 OCR 처리 시도된 파일들만 삭제
        await admin.storage().bucket().file(sp).delete();
      }
      console.log(
        `[${uid}] Cleaned up original uploads as no text was extracted.`,
      );
    } catch (deleteError) {
      console.error(
        'Failed to cleanup original PDF uploads after no text extraction:',
        deleteError,
      );
    }
    return [];
  }

  console.log(
    `[${uid}] Total extracted text length from all files: ${combinedExtractedText.length}`,
  );

  // 6. Call Existing Elasticsearch Analysis Endpoint with combined text
  const analysisEndpoint =
    'https://smartglot--smartglot.asia-east1.hosted.app/api/analyze-terms';
  try {
    console.log(
      `[${uid}] Sending combined extracted text to analysis endpoint: ${analysisEndpoint}`,
    );
    const response = await axios.post(
      analysisEndpoint,
      { text: combinedExtractedText }, // combinedExtractedText 사용
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    console.log(
      `[${uid}] Received analysis results from backend for combined text.`,
    );
    const terms = response.data;
    if (Array.isArray(terms)) {
      const filteredTerms = terms.filter(
        (termData) =>
          termData &&
          typeof termData.frequency === 'number' &&
          termData.frequency >= 2,
      );
      console.log(
        `[${uid}] Returning ${filteredTerms.length} terms after frequency filtering. Original count: ${terms.length}`,
      );
      return filteredTerms; // 통합된 최종 결과 반환
    } else {
      console.warn(
        `[${uid}] Received non-array data from analysis endpoint, returning as is.`,
      );
      return terms;
    }
  } catch (error) {
    console.error(
      `[${uid}] Error calling analysis endpoint for combined text:`,
      error,
    );
    // Clean up all uploaded original PDFs if analysis endpoint failed
    try {
      for (const sp of processedStoragePaths) {
        // 성공적으로 OCR 처리된 파일들만 삭제
        await admin.storage().bucket().file(sp).delete();
      }
      console.log(
        `[${uid}] Cleaned up original uploads after analysis endpoint failure.`,
      );
    } catch (deleteError) {
      console.error(
        'Failed to cleanup original PDF uploads after analysis failure:',
        deleteError,
      );
    }
    throw new functions.https.HttpsError(
      'internal',
      `Failed to process combined PDF text with analysis endpoint: ${error.message}`,
    );
  }
});
