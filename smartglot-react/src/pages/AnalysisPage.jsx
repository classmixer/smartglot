import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { storage, database } from '../firebase/config'; // Firebase Storage 및 database 사용
// import './AnalysisPage.css'; // AnalysisPage에만 적용될 스타일이 있다면 만듭니다.

function AnalysisPage() {
  const { currentUser, analyzePdfWithCloudFunction } = useAuth();
  const [file, setFile] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  // const [uploadStatus, setUploadStatus] = useState(''); // User removed
  const [analysisError, setAnalysisError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentFileName, setCurrentFileName] = useState('');
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef(null);
  const [currentHistoryItemId, setCurrentHistoryItemId] = useState(null); // 현재 히스토리 항목 ID 상태

  const outletContext = useOutletContext();
  console.log('[AnalysisPage] Outlet Context received:', outletContext);

  // outletContext가 null이거나 undefined일 수 있으므로 안전하게 구조 분해 할당
  const selectedHistoryItem = outletContext?.selectedHistoryItem;
  const setSelectedHistoryItem = outletContext?.setSelectedHistoryItem;

  useEffect(() => {
    console.log(
      '[AnalysisPage] useEffect triggered. selectedHistoryItem from state:',
      selectedHistoryItem,
    );
    if (selectedHistoryItem) {
      console.log(
        '[AnalysisPage] selectedHistoryItem.result from state:',
        selectedHistoryItem.result,
      );
      setAnalysisResults(selectedHistoryItem.result || []);
      setCurrentFileName(
        selectedHistoryItem.fileName || 'Selected from history',
      );
      setCurrentHistoryItemId(selectedHistoryItem.id); // 히스토리 ID 저장 (selectedHistoryItem.id가 키라고 가정)
      setFile(null);
      // setUploadStatus(`Displaying history: ${selectedHistoryItem.fileName}`); // User removed
      setAnalysisError('');
      setIsAnalyzing(false);
      if (setSelectedHistoryItem) {
        console.log(
          '[AnalysisPage] Calling setSelectedHistoryItem(null) from useEffect',
        );
        setSelectedHistoryItem(null);
      }
    } else {
      console.log(
        '[AnalysisPage] selectedHistoryItem is null or undefined in useEffect, not updating results.',
      );
    }
  }, [selectedHistoryItem, setSelectedHistoryItem]);

  // 새 분석을 위한 상태 초기화 함수
  const resetStateForNewAnalysis = () => {
    setFile(null);
    setAnalysisResults(null);
    setAnalysisError('');
    setCurrentFileName('');
    setCurrentHistoryItemId(null); // 히스토리 컨텍스트 초기화
    // setUploadStatus('Please select a PDF file.'); // User removed
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // 파일 입력 필드 실제 값 초기화
    }
  };

  const handleFileChange = (e) => {
    const newSelectedFile = e.target.files ? e.target.files[0] : null;

    resetStateForNewAnalysis(); // 새 파일 선택 시 이전 상태 및 히스토리 ID 초기화

    if (newSelectedFile) {
      const isPdfFile =
        newSelectedFile.type === 'application/pdf' ||
        (newSelectedFile.name &&
          newSelectedFile.name.toLowerCase().endsWith('.pdf'));

      if (isPdfFile) {
        setFile(newSelectedFile);
        setCurrentFileName(newSelectedFile.name);
        // setUploadStatus(`Selected: ${newSelectedFile.name}`); // User removed
      } else {
        // setUploadStatus('Invalid file type. Please select a PDF file.'); // User removed
        setAnalysisError('Invalid file type. Please select a PDF file.'); // 오류 메시지는 analysisError에 표시
      }
    }
  };

  const handleAnalyzePdf = async () => {
    if (!file) {
      setAnalysisError('Please select a PDF file first.');
      return;
    }
    if (!currentUser) {
      setAnalysisError('Please log in to analyze PDF files.');
      // navigate('/auth?mode=login'); // 필요시 로그인 페이지로 리디렉션
      return;
    }

    setIsAnalyzing(true);
    // setCurrentFileName(file.name); // 이미 handleFileChange에서 설정됨
    // setUploadStatus('Uploading PDF...'); // User removed
    setAnalysisError('');
    setAnalysisResults(null);
    setCurrentHistoryItemId(null); // 새 분석이므로 히스토리 ID 초기화
    let storagePath = null;

    try {
      // 1. Upload PDF to Cloud Storage
      storagePath = `uploads/${currentUser.uid}/${Date.now()}_${file.name}`;
      const storageRef = storage.ref(storagePath);
      await storageRef.put(file);
      // const downloadURL = await (await storageRef.put(file)).ref.getDownloadURL(); // 필요시 이렇게 사용 가능
      console.log('File uploaded to:', storagePath);
      // setUploadStatus('Processing PDF with Vision AI...'); // User removed

      // 2. Call the Cloud Function to analyze the PDF
      const terms = await analyzePdfWithCloudFunction(storagePath, file.name);

      if (terms && terms.length > 0) {
        setAnalysisResults(terms);
      } else {
        setAnalysisResults([]); // 결과 없음을 명시적으로 표시
      }
      // setUploadStatus('Analysis complete.'); // User removed
      // 중요: 새 분석 결과를 히스토리에 저장하는 로직이 여기에 추가되어야 합니다.
      // (현재 요청 범위는 아니지만, 실제 서비스에서는 필요합니다)
      // 예: const newHistoryId = await saveNewAnalysisToHistory(currentUser.uid, file.name, terms, storagePath);
      //     setCurrentHistoryItemId(newHistoryId); // 새로 저장된 히스토리 ID로 설정
    } catch (error) {
      console.error('PDF analysis process failed:', error);
      setAnalysisError(
        `Error during PDF analysis: ${error.message || 'Unknown error'}`,
      );
      // setUploadStatus('Error during analysis.'); // User removed

      // 실패 시 스토리지 파일 삭제 시도 (선택적)
      if (storagePath) {
        try {
          await storage.ref(storagePath).delete();
          console.log('Cleaned up failed upload from storage.');
        } catch (deleteError) {
          console.error('Failed to cleanup storage:', deleteError);
        }
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

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

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      handleFileChange({ target: { files: droppedFiles } });
    }
  };

  // 용어 삭제 핸들러 추가
  const handleDeleteTerm = async (termIndex) => {
    if (!analysisResults) return;

    const updatedResults = analysisResults.filter(
      (_, index) => index !== termIndex,
    );
    setAnalysisResults(updatedResults);

    if (currentUser && currentHistoryItemId) {
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
        // 변경 사항을 롤백하거나 사용자에게 명확한 오류를 표시할 수 있습니다.
        // 예: setAnalysisResults(analysisResults); // 이전 상태로 롤백 (원본 배열을 어딘가에 보관해야 함)
      }
    }
  };

  return (
    <div id="analysis-container">
      {' '}
      {/* main.css의 ID 선택자 활용 */}
      <h2>
        {currentFileName
          ? `Results for: ${currentFileName}`
          : 'Upload PDF to Analyze'}
      </h2>
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
          Drag and drop a PDF file here, or use the button below:
        </label>

        <input
          type="file"
          id="pdfInput"
          ref={fileInputRef}
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          disabled={isAnalyzing}
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
            파일 선택
          </button>
          <span
            style={{
              color: currentFileName ? '#fff' : '#777',
              fontSize: '0.9em',
            }}
          >
            {currentFileName || '선택된 파일 없음'}
          </span>
        </div>
      </div>
      <button
        id="analyzePdfButton"
        onClick={handleAnalyzePdf}
        disabled={!file || isAnalyzing}
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze PDF'}
      </button>
      <h2>Top Terms</h2>
      {analysisError && (
        <div style={{ color: 'red', marginTop: '10px' }}>{analysisError}</div>
      )}
      <div id="results">
        {analysisResults ? (
          analysisResults.length > 0 ? (
            analysisResults.map((termData, index) => (
              <div
                key={index}
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
                  onClick={() => handleDeleteTerm(index)}
                  style={{
                    marginLeft: '10px',
                    padding: '3px 8px',
                    fontSize: '0.8em',
                    color: '#fff',
                    backgroundColor: '#dc3545', // Bootstrap's danger color
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
            <p>No significant terms found (or only stop words/numbers).</p>
          )
        ) : (
          <p>Upload a PDF and click "Analyze PDF" to see results.</p>
        )}
      </div>
    </div>
  );
}

export default AnalysisPage;
