import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './HistorySidebar.css'; // 사이드바 스타일 파일

function HistorySidebar({ isOpen, onClose, onSelectHistory }) {
  const { currentUser, getAnalysisHistory } = useAuth();
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasFetched, setHasFetched] = useState(false); // API 호출 여부 추적

  const fetchHistory = useCallback(async () => {
    if (!currentUser || !isOpen || hasFetched) {
      // 로그인 안 했거나, 닫혀있거나, 이미 호출했으면 실행 안 함
      if (isOpen && hasFetched && history.length === 0) {
        // 이미 호출했고 기록이 없으면 메시지 유지
      } else if (isOpen && !hasFetched && !currentUser) {
        setError('Please log in to see history.');
      }
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const userHistory = await getAnalysisHistory();
      setHistory(userHistory);
      setHasFetched(true); // 호출 완료 표시
      if (userHistory.length === 0) {
        // setError('No analysis history found.'); // 메시지를 직접 설정하는 대신, 아래 렌더링 부분에서 처리
      }
    } catch (e) {
      console.error('Error fetching history in sidebar:', e);
      setError('Failed to load history.');
    }
    setIsLoading(false);
  }, [currentUser, getAnalysisHistory, isOpen, hasFetched]);

  useEffect(() => {
    if (isOpen && currentUser && !hasFetched) {
      // 열려있고, 로그인했고, 아직 호출 안 했으면 호출
      fetchHistory();
    }
    if (!isOpen) {
      // 사이드바가 닫히면 다음 열릴 때 다시 로드하도록 hasFetched 초기화
      // setHasFetched(false); // 주석 처리: 사용자가 닫았다 열 때마다 새로고침하지 않도록. 필요시 활성화.
    }
  }, [isOpen, currentUser, fetchHistory, hasFetched]);

  const handleHistoryItemClick = (historyItem) => {
    console.log(
      '[HistorySidebar] Item clicked. Calling onSelectHistory with:',
      historyItem,
    );
    if (onSelectHistory) {
      onSelectHistory(historyItem);
    }
    onClose(); // 기록 선택 시 사이드바 닫기
  };

  return (
    <div className={`history-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>Analysis History</h3>
        <button onClick={onClose} className="close-btn">
          &times;
        </button>
      </div>
      <div className="sidebar-content">
        {isLoading && <p>Loading history...</p>}
        {error && <p className="error-message">{error}</p>}
        {!isLoading && !error && (
          <>
            {history.length > 0 ? (
              <ul>
                {history.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleHistoryItemClick(item)}
                  >
                    <div className="history-item-filename">{item.fileName}</div>
                    <div className="history-item-date">
                      {new Date(item.analysisDate).toLocaleDateString()} -{' '}
                      {new Date(item.analysisDate).toLocaleTimeString()}
                    </div>
                    <div className="history-item-terms">
                      Top terms: {item.topTerms?.join(', ') || 'N/A'}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              hasFetched && <p>No analysis history found.</p> // API 호출 후 기록이 없을 때만 메시지 표시
            )}
            {!currentUser && !hasFetched && (
              <p>Please log in to view your analysis history.</p> // 로그인 안했을 때
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default HistorySidebar;
