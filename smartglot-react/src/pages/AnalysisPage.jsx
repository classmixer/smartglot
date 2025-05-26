import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { storage } from '../firebase/config'; // Firebase Storage 사용
// import './AnalysisPage.css'; // AnalysisPage에만 적용될 스타일이 있다면 만듭니다.

function AnalysisPage() {
  const { currentUser, analyzePdfWithCloudFunction } = useAuth();
  const [file, setFile] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);

  const [analysisError, setAnalysisError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentFileName, setCurrentFileName] = useState('');
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef(null);

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
      setFile(null);

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

  const handleFileChange = (e) => {
    // Extract the file from the event (could be from input change or drop)
    const newSelectedFile = e.target.files ? e.target.files[0] : null;

    if (newSelectedFile) {
      // Check if it's a PDF by type OR by name extension as a fallback
      const isPdfFile =
        newSelectedFile.type === 'application/pdf' ||
        (newSelectedFile.name &&
          newSelectedFile.name.toLowerCase().endsWith('.pdf'));

      if (isPdfFile) {
        setFile(newSelectedFile);
        setCurrentFileName(newSelectedFile.name);

        setAnalysisResults(null);
        setAnalysisError('');
      } else {
        // File selected is not a PDF
        setFile(null);
        setCurrentFileName('');

        // If the event came from a file input, clear its value
        if (e.target && typeof e.target.value === 'string') {
          e.target.value = null;
        }
      }
    } else {
      // No file was selected or dropped
      setFile(null);
      setCurrentFileName('');

      // If the event came from a file input, clear its value
      // (e.g., user cancels the file dialog after selecting a file initially)
      if (e.target && typeof e.target.value === 'string') {
        e.target.value = null;
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
    setCurrentFileName(file.name);

    setAnalysisError('');
    setAnalysisResults(null);
    let storagePath = null;

    try {
      // 1. Upload PDF to Cloud Storage
      storagePath = `uploads/${currentUser.uid}/${Date.now()}_${file.name}`;
      const storageRef = storage.ref(storagePath);
      await storageRef.put(file);
      // const downloadURL = await (await storageRef.put(file)).ref.getDownloadURL(); // 필요시 이렇게 사용 가능
      console.log('File uploaded to:', storagePath);

      // 2. Call the Cloud Function to analyze the PDF
      const terms = await analyzePdfWithCloudFunction(storagePath, file.name);

      if (terms && terms.length > 0) {
        setAnalysisResults(terms);
      } else {
        setAnalysisResults([]); // 결과 없음을 명시적으로 표시
      }
    } catch (error) {
      console.error('PDF analysis process failed:', error);
      setAnalysisError(
        `Error during PDF analysis: ${error.message || 'Unknown error'}`,
      );

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
              <div key={index} className="result-item">
                <span className="term">{termData.term}</span>
                <span className="freq">(Frequency: {termData.frequency})</span>
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
