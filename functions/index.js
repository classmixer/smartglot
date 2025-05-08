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
  // const email = context.auth.token.email; // Unused variable, commented out
  const token = context.rawRequest.headers.authorization?.split('Bearer ')[1]; // Get the token passed from the client

  // 2. Validate Input Data
  const storagePath = data.storagePath;
  if (!storagePath || typeof storagePath !== 'string') {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with a "storagePath" argument (string).',
    );
  }

  console.log(`[${uid}] Received request for PDF analysis: ${storagePath}`);

  // 3. Prepare Vision AI Request
  const bucketName = admin.storage().bucket().name; // Get default bucket name
  const gcsSourceUri = `gs://${bucketName}/${storagePath}`;
  const gcsDestinationUri = `gs://${bucketName}/ocr_results/${uid}/${Date.now()}/`; // Must end with '/' for Vision AI batch output

  const inputConfig = {
    // Supported mime_types are: 'application/pdf', 'image/tiff', 'image/gif'
    mimeType: 'application/pdf',
    gcsSource: {
      uri: gcsSourceUri,
    },
  };

  const outputConfig = {
    gcsDestination: {
      uri: gcsDestinationUri,
    },
    batchSize: 1, // Process one file per output JSON
  };

  const features = [{ type: 'DOCUMENT_TEXT_DETECTION' }];

  const visionRequest = {
    requests: [
      {
        inputConfig: inputConfig,
        features: features,
        outputConfig: outputConfig,
      },
    ],
  };

  let extractedText = '';

  try {
    // 4. Call Vision AI (batch processing for PDF)
    console.log(
      `[${uid}] Starting Vision AI batch processing for ${gcsSourceUri}`,
    );
    const [operation] =
      await visionClient.asyncBatchAnnotateFiles(visionRequest);
    console.log(`[${uid}] Vision AI operation started: ${operation.name}`);

    // Wait for the operation to complete
    // Note: For longer PDFs, consider using Pub/Sub notifications instead of polling
    // const [filesResponse] = await operation.promise(); // Unused variable, commented out
    await operation.promise(); // Wait for completion
    console.log(`[${uid}] Vision AI operation completed.`);

    // 5. Get Text from Vision AI Output
    // The output is multiple JSON files in the destination folder.
    // We need to list files and read the first one (since batchSize is 1).
    const destinationPrefix = gcsDestinationUri.replace(
      `gs://${bucketName}/`,
      '',
    );
    const [outputFiles] = await admin
      .storage()
      .bucket()
      .getFiles({ prefix: destinationPrefix });

    if (!outputFiles || outputFiles.length === 0) {
      throw new Error('Vision AI did not produce an output file.');
    }

    // Find the JSON output file (usually ends with output-1-to-1.json)
    const resultFile = outputFiles.find((file) => file.name.endsWith('.json'));
    if (!resultFile) {
      throw new Error('Could not find the Vision AI JSON output file.');
    }

    console.log(`[${uid}] Reading Vision AI result file: ${resultFile.name}`);
    const [jsonData] = await resultFile.download();
    const result = JSON.parse(jsonData.toString());

    // Check for errors in the response
    if (result.responses && result.responses[0] && result.responses[0].error) {
      const error = result.responses[0].error;
      console.error(`[${uid}] Vision AI Error in response:`, error);
      throw new Error(`Vision AI processing failed: ${error.message}`);
    }

    if (
      result.responses &&
      result.responses[0] &&
      result.responses[0].fullTextAnnotation
    ) {
      extractedText = result.responses[0].fullTextAnnotation.text;
      console.log(
        `[${uid}] Extracted ${extractedText.length} characters from PDF.`,
      );

      // Filter out single-character words for Korean text
      if (extractedText && extractedText.length > 0) {
        const words = extractedText.split(/\s+/); // Split by whitespace
        const filteredWords = words.filter(() => true); // <--- 'word'가 여기서 선언됨
        extractedText = filteredWords.join(' ');
        console.log(
          `[${uid}] Text after CUSTM filtering: ${extractedText.length} characters.`,
        );
      }
    } else {
      console.warn(
        `[${uid}] No fullTextAnnotation found in Vision AI response for ${gcsSourceUri}`,
      );
      extractedText = ''; // No text found or error in structure
    }

    // Clean up Vision AI output files (optional)
    try {
      console.log(
        `[${uid}] Deleting Vision AI output folder: ${destinationPrefix}`,
      );
      await admin.storage().bucket().deleteFiles({ prefix: destinationPrefix });
    } catch (cleanupError) {
      console.error('Error cleaning up Vision AI output files:', cleanupError);
    }
  } catch (error) {
    console.error(
      `[${uid}] Error during Vision AI processing for ${storagePath}:`,
      error,
    );
    // Attempt to delete the original uploaded file if Vision AI failed
    try {
      await admin.storage().bucket().file(storagePath).delete();
      console.log(
        `[${uid}] Cleaned up original upload ${storagePath} after Vision AI failure.`,
      );
    } catch (deleteError) {
      console.error('Failed to cleanup original PDF upload:', deleteError);
    }
    throw new functions.https.HttpsError(
      'internal',
      `Failed to process PDF with Vision AI: ${error.message}`,
    );
  }

  // If no text was extracted, return empty results
  if (!extractedText.trim()) {
    console.log(
      `[${uid}] No text extracted from ${storagePath}, returning empty results.`,
    );
    // Optionally delete the original upload if it yielded no text
    // try { await admin.storage().bucket().file(storagePath).delete(); } catch(e){}
    return [];
  }

  // 6. Call Existing Elasticsearch Analysis Endpoint
  const analysisEndpoint =
    'https://smartglot--smartglot.asia-east1.hosted.app/api/analyze-terms'; // Updated with your backend URL and path

  // Removed the check for placeholder URL as it's now set
  // if (analysisEndpoint === 'YOUR_APP_HOSTING_BACKEND_URL/api/analyze-terms') { ... }

  try {
    console.log(
      `[${uid}] Sending extracted text to analysis endpoint: ${analysisEndpoint}`,
    );
    // Log the text being sent and the token
    console.log(`[${uid}] Text to send to analysis endpoint:`, extractedText);
    console.log(`[${uid}] Authorization Token for analysis endpoint:`, token);

    const response = await axios.post(
      analysisEndpoint,
      { text: extractedText },
      {
        // Restore the config object with headers
        headers: {
          Authorization: `Bearer ${token}`, // Pass the original user token again
          'Content-Type': 'application/json',
        },
        // Add timeout? Might be long for large texts
        // timeout: 30000, // 30 seconds
      },
    );

    console.log(`[${uid}] Received analysis results from backend.`);
    // 7. Return Results
    // return response.data; // Assuming the backend returns the array of terms (original simple return)

    // Filter terms by frequency (>= 2)
    const terms = response.data;
    if (Array.isArray(terms)) {
      const filteredTerms = terms.filter(
        (termData) =>
          termData &&
          typeof termData.frequency === 'number' &&
          termData.frequency >= 2,
      );
      console.log(
        `[${uid}] Returning ${filteredTerms.length} terms after frequency filtering (>=2). Original count: ${terms.length}`,
      );
      return filteredTerms;
    } else {
      console.warn(
        `[${uid}] Received non-array data from analysis endpoint, returning as is.`,
      );
      return terms; // Or handle error appropriately
    }
  } catch (error) {
    console.error(
      `[${uid}] Error calling analysis endpoint (${analysisEndpoint}):`,
      error,
    );
    // Attempt to delete the original uploaded file if analysis endpoint failed
    try {
      await admin.storage().bucket().file(storagePath).delete();
      console.log(
        `[${uid}] Cleaned up original upload ${storagePath} after analysis endpoint failure.`,
      );
    } catch (deleteError) {
      console.error('Failed to cleanup original PDF upload:', deleteError);
    }
    throw new functions.https.HttpsError(
      'internal',
      `Failed to process PDF with analysis endpoint: ${error.message}`,
    );
  }
});
