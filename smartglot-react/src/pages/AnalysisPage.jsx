import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { storage } from '../firebase/config'; // Firebase Storage 사용
// import './AnalysisPage.css'; // AnalysisPage에만 적용될 스타일이 있다면 만듭니다.

function AnalysisPage() {
  const { currentUser, analyzePdfWithCloudFunction } = useAuth();
  const [file, setFile] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [analysisError, setAnalysisError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentFileName, setCurrentFileName] = useState('');

  const { selectedHistoryItem, setSelectedHistoryItem } =
    useOutletContext() || {};

  useEffect(() => {
    if (selectedHistoryItem) {
      setAnalysisResults(selectedHistoryItem.result || []);
      setCurrentFileName(
        selectedHistoryItem.fileName || 'Selected from history',
      );
      setFile(null);
      setUploadStatus(`Displaying history: ${selectedHistoryItem.fileName}`);
      setAnalysisError('');
      setIsAnalyzing(false);
      if (setSelectedHistoryItem) setSelectedHistoryItem(null);
    }
  }, [selectedHistoryItem, setSelectedHistoryItem]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setCurrentFileName(selectedFile.name);
      setUploadStatus(`Selected: ${selectedFile.name}`);
      setAnalysisResults(null);
      setAnalysisError('');
    } else {
      setFile(null);
      setCurrentFileName('');
      setUploadStatus('Please select a PDF file.');
      e.target.value = null;
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
    setUploadStatus('Uploading PDF...');
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
      setUploadStatus('Processing PDF with Vision AI...');

      // 2. Call the Cloud Function to analyze the PDF
      const terms = await analyzePdfWithCloudFunction(storagePath, file.name);

      if (terms && terms.length > 0) {
        setAnalysisResults(terms);
      } else {
        setAnalysisResults([]); // 결과 없음을 명시적으로 표시
      }
      setUploadStatus('Analysis complete.');
    } catch (error) {
      console.error('PDF analysis process failed:', error);
      setAnalysisError(
        `Error during PDF analysis: ${error.message || 'Unknown error'}`,
      );
      setUploadStatus('Error during analysis.');
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
      <div id="pdf-analysis-section">
        <label htmlFor="pdfInput">Upload a PDF to analyze a new file:</label>
        <input
          type="file"
          id="pdfInput"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: 'block', marginTop: '5px', marginBottom: '10px' }}
          disabled={isAnalyzing}
        />
        <button
          id="analyzePdfButton"
          onClick={handleAnalyzePdf}
          disabled={!file || isAnalyzing}
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze PDF'}
        </button>
        {uploadStatus && (
          <span
            id="pdf-upload-status"
            style={{ marginLeft: '10px', fontSize: '0.9em' }}
          >
            {uploadStatus}
          </span>
        )}
      </div>
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
