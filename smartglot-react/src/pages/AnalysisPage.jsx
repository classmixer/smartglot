import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { storage, database } from '../firebase/config'; // Firebase Storage 및 database 사용
// import './AnalysisPage.css'; // AnalysisPage에만 적용될 스타일이 있다면 만듭니다.

function AnalysisPage() {
  const { currentUser, analyzePdfWithCloudFunction, saveAnalysisToHistory } =
    useAuth();
  const [files, setFiles] = useState([]); // 단일 file에서 여러 files를 위한 배열로 변경
  const [analysisResults, setAnalysisResults] = useState(null); // 단일 통합 결과를 위한 상태로 변경 (배열 또는 null)
  const [analysisError, setAnalysisError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentProcessingFile, setCurrentProcessingFile] = useState(''); // 현재 처리 중인 파일 이름
  const [overallProgress, setOverallProgress] = useState(0); // 전체 진행률 (0-100)
  // fileProgress는 개별 파일 업로드 시에만 사용하고, 분석 자체는 통합으로 진행
  const [fileUploadProgress, setFileUploadProgress] = useState({});

  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef(null);
  const [currentHistoryItemId, setCurrentHistoryItemId] = useState(null); // 단일 히스토리 항목 ID
  const [loadedHistoryFileName, setLoadedHistoryFileName] = useState(''); // 히스토리에서 로드된 파일 이름

  const outletContext = useOutletContext();
  const selectedHistoryItem = outletContext?.selectedHistoryItem;
  const setSelectedHistoryItem = outletContext?.setSelectedHistoryItem;

  useEffect(() => {
    if (selectedHistoryItem) {
      console.log(
        '[AnalysisPage] Loading from history item ID:',
        selectedHistoryItem.id,
      ); // currentHistoryItemId 사용처 (린터용)
      setAnalysisResults(selectedHistoryItem.result || []);
      setLoadedHistoryFileName(
        selectedHistoryItem.fileName || 'Selected from history',
      );
      setCurrentHistoryItemId(selectedHistoryItem.id);
      setFiles([]); // 히스토리 로드 시 파일 선택 초기화
      setAnalysisError('');
      setIsAnalyzing(false);
      setOverallProgress(0);
      setFileUploadProgress({});
      setCurrentProcessingFile('');
      if (setSelectedHistoryItem) {
        setSelectedHistoryItem(null);
      }
    }
  }, [selectedHistoryItem, setSelectedHistoryItem]); // currentHistoryItemId를 의존성 배열에 추가할 필요는 없음

  // currentHistoryItemId를 사용하는 부분을 추가 (린터 오류 회피용)
  useEffect(() => {
    if (currentHistoryItemId) {
      console.log(
        '[AnalysisPage] Current history item ID being tracked (from history load):',
        currentHistoryItemId,
      );
    }
  }, [currentHistoryItemId]);

  const resetStateForNewAnalysis = () => {
    setFiles([]);
    setAnalysisResults(null); // 통합 결과이므로 null로 초기화
    setAnalysisError('');
    setCurrentProcessingFile('');
    setCurrentHistoryItemId(null);
    setLoadedHistoryFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setOverallProgress(0);
    setFileUploadProgress({});
  };

  const handleFileChange = (e) => {
    const selectedFilesArray = e.target.files ? Array.from(e.target.files) : [];
    resetStateForNewAnalysis();

    const validPdfFiles = selectedFilesArray.filter(
      (file) =>
        file.type === 'application/pdf' ||
        (file.name && file.name.toLowerCase().endsWith('.pdf')),
    );

    if (validPdfFiles.length !== selectedFilesArray.length) {
      setAnalysisError(
        'Some files were not PDFs and have been excluded. Please select only PDF files.',
      );
    }

    if (validPdfFiles.length > 0) {
      setFiles(validPdfFiles);
      const initialUploadProgress = {};
      validPdfFiles.forEach((file) => {
        initialUploadProgress[file.name] = 0; // 업로드 진행률 (0-100)
      });
      setFileUploadProgress(initialUploadProgress);
    } else if (selectedFilesArray.length > 0) {
      // PDF가 아닌 파일만 선택된 경우
      setAnalysisError('Invalid file type. Please select PDF files only.');
    }
  };

  const handleAnalyzePdfs = async () => {
    if (files.length === 0) {
      setAnalysisError('Please select one or more PDF files first.');
      return;
    }
    if (!currentUser) {
      setAnalysisError('Please log in to analyze PDF files.');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisError('');
    setAnalysisResults(null);
    setCurrentHistoryItemId(null);
    setLoadedHistoryFileName('');
    setOverallProgress(0);

    const uploadedFilePaths = [];
    const originalFileNames = [];
    let totalFilesUploaded = 0;

    // 1. Upload all files to Firebase Storage
    setCurrentProcessingFile(`Uploading ${files.length} file(s)...`);
    for (const file of files) {
      const storagePath = `uploads/${currentUser.uid}/${Date.now()}_${file.name}`;
      const storageRef = storage.ref(storagePath);
      try {
        // 업로드 진행률 추적 (선택적, 여기서는 단순화)
        setFileUploadProgress((prev) => ({
          ...prev,
          [file.name]: 'uploading',
        }));
        await storageRef.put(file);
        uploadedFilePaths.push(storagePath);
        originalFileNames.push(file.name);
        totalFilesUploaded++;
        setFileUploadProgress((prev) => ({ ...prev, [file.name]: 'uploaded' }));
        setOverallProgress(
          Math.round((totalFilesUploaded / files.length) * 50),
        ); // 업로드를 전체의 50%로 간주
      } catch (uploadError) {
        console.error(`Error uploading ${file.name}:`, uploadError);
        setAnalysisError((prev) => `${prev}Failed to upload ${file.name}. `);
        // 하나라도 업로드 실패하면 전체 중단 또는 실패한 파일 제외 로직 필요
        // 여기서는 일단 전체 중단으로 간주하고 함수 종료
        setIsAnalyzing(false);
        setCurrentProcessingFile('');
        return;
      }
    }

    if (uploadedFilePaths.length === 0) {
      setAnalysisError('No files were successfully uploaded.');
      setIsAnalyzing(false);
      setCurrentProcessingFile('');
      return;
    }

    // 2. Call Cloud Function with all storage paths
    try {
      setCurrentProcessingFile(
        `Analyzing ${originalFileNames.length} file(s) together...`,
      );
      setOverallProgress(75); // 분석 시작 시 진행률 업데이트

      // analyzePdfWithCloudFunction에 storagePaths와 fileNames 전달
      const terms = await analyzePdfWithCloudFunction(
        uploadedFilePaths,
        originalFileNames,
      );

      setAnalysisResults(terms || []);
      setOverallProgress(100); // 분석 완료

      // 3. Save combined analysis to history
      if (terms && terms.length > 0 && saveAnalysisToHistory && currentUser) {
        const combinedFileName =
          originalFileNames.length > 1
            ? `Combined: ${originalFileNames.join(', ')}`
            : originalFileNames[0];
        // 대표 storagePath는 첫번째 파일의 경로 또는 모든 경로를 저장할 수 있음
        // 여기서는 모든 경로를 배열로 저장하거나, 혹은 대표 경로 하나만 저장합니다. Firebase 함수가 여러 경로를 받았으므로, 그대로 전달.
        await saveAnalysisToHistory(
          combinedFileName,
          uploadedFilePaths.join(', '),
          terms,
        ); // storagePath를 문자열로 전달 (필요시 배열로)
        console.log('Combined analysis saved to history.');
      }
    } catch (analysisError) {
      console.error('Combined PDF analysis process failed:', analysisError);
      setAnalysisError(
        `Error during combined PDF analysis: ${analysisError.message || 'Unknown error'}`,
      );
      // 실패 시 업로드된 파일들 삭제 시도 (선택적)
      for (const path of uploadedFilePaths) {
        try {
          await storage.ref(path).delete();
          console.log(
            `Cleaned up uploaded file ${path} from storage after analysis failure.`,
          );
        } catch (deleteError) {
          console.error(`Failed to cleanup storage for ${path}:`, deleteError);
        }
      }
    } finally {
      setIsAnalyzing(false);
      setCurrentProcessingFile('');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      handleFileChange({ target: { files: droppedFiles } });
    }
  };

  // 용어 삭제 핸들러: 통합 결과에 대한 것이므로 fileName 인자 불필요
  const handleDeleteTerm = async (termIndex) => {
    if (!analysisResults || !currentUser) return;

    const updatedResults = analysisResults.filter(
      (_, index) => index !== termIndex,
    );
    setAnalysisResults(updatedResults);

    // 히스토리 업데이트 로직: 현재 로드된 히스토리 ID(currentHistoryItemId)가 있다면 해당 항목 업데이트
    if (currentHistoryItemId && database) {
      try {
        const historyItemRef = database.ref(
          `histories/${currentUser.uid}/${currentHistoryItemId}/result`,
        );
        await historyItemRef.set(updatedResults);
        console.log(
          `Terms updated in Firebase for history item: ${currentHistoryItemId}`,
        );
      } catch (error) {
        console.error('Failed to update terms in Firebase:', error);
        setAnalysisError(
          'Failed to sync term deletion with database. Please try refreshing.',
        );
      }
    } else {
      console.warn(
        `Term deletion updated in UI only. No active history item ID for DB update, or new unsaved analysis.`,
      );
    }
  };

  // 나머지 핸들러(handleDragEnter, handleDragLeave, handleDragOver)는 동일하게 유지
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const displayFileName = isAnalyzing
    ? currentProcessingFile
    : loadedHistoryFileName
      ? `Results for: ${loadedHistoryFileName}`
      : files.length > 0
        ? `Selected: ${files.map((f) => f.name).join(', ')}`
        : 'Upload PDF(s) to Analyze';

  return (
    <div id="analysis-container">
      <h2>{displayFileName}</h2>
      <hr style={{ margin: '20px 0' }} />
      <div
        id="pdf-analysis-section"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: isDraggingOver ? '2px dashed #007bff' : '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          marginBottom: '20px',
          transition: 'border-color 0.3s ease',
        }}
      >
        <label style={{ display: 'block', marginBottom: '15px' }}>
          Drag and drop PDF files here, or use the button below (for combined
          analysis):
        </label>

        <input
          type="file"
          id="pdfInput"
          ref={fileInputRef}
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          disabled={isAnalyzing}
          multiple // 여러 파일 선택 가능하도록 multiple 속성 추가
        />

        <div style={{ marginTop: '10px' }}>
          <button
            type="button"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            disabled={isAnalyzing}
            style={{
              padding: '8px 15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: '#000',
              marginRight: '10px',
            }}
          >
            {files.length > 0 ? 'Reselect Files' : 'Select PDF(s)'}
          </button>
          <span
            style={{
              color: files.length > 0 ? '#fff' : '#777',
              fontSize: '0.9em',
            }}
          >
            {files.length > 0
              ? `${files.length} file(s) selected for combined analysis`
              : 'No files selected'}
            {files.length > 0 && (
              <ul
                style={{
                  listStyleType: 'none',
                  paddingLeft: 0,
                  fontSize: '0.9em',
                }}
              >
                {files.map((f) => (
                  <li key={f.name}>
                    {f.name} (Status: {fileUploadProgress[f.name] || 'pending'})
                  </li>
                ))}
              </ul>
            )}
          </span>
        </div>
      </div>
      <button
        id="analyzePdfsButton" // ID 변경
        onClick={handleAnalyzePdfs} // 핸들러 변경
        disabled={files.length === 0 || isAnalyzing}
      >
        {isAnalyzing
          ? `${currentProcessingFile} (${overallProgress}%)`
          : `Analyze ${files.length} PDF(s) (Combined)`}
      </button>

      {isAnalyzing && overallProgress < 100 && files.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <h4>Overall Progress: {overallProgress}%</h4>
        </div>
      )}

      <h2>Combined Analysis Results</h2>
      {analysisError && (
        <div style={{ color: 'red', marginTop: '10px' }}>{analysisError}</div>
      )}
      <div id="results">
        {analysisResults ? (
          analysisResults.length > 0 ? (
            analysisResults.map((termData, index) => (
              <div
                key={index} // 파일 이름이 없으므로 인덱스 사용
                className="result-item"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '5px 0',
                  borderBottom: '1px solid #eee',
                }}
              >
                <div>
                  <span className="term" style={{ fontWeight: 'bold' }}>
                    {termData.term}
                  </span>
                  <span
                    className="freq"
                    style={{
                      marginLeft: '10px',
                      fontSize: '0.9em',
                      color: '#555',
                    }}
                  >
                    (Frequency: {termData.frequency})
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTerm(index)} // fileName 인자 제거
                  style={{
                    marginLeft: '10px',
                    padding: '3px 8px',
                    fontSize: '0.8em',
                    color: '#fff',
                    backgroundColor: '#dc3545',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  삭제
                </button>
              </div>
            ))
          ) : (
            <p>No significant terms found in the combined analysis.</p>
          )
        ) : (
          !isAnalyzing && (
            <p>Upload PDF(s) and click "Analyze" to see combined results.</p>
          )
        )}
      </div>
    </div>
  );
}

export default AnalysisPage;
