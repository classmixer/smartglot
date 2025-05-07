import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './WelcomePage.css'; // WelcomePage에만 적용될 스타일이 있다면 만듭니다.

function WelcomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth?mode=login'); // Get Started 클릭 시 로그인 폼이 있는 인증 페이지로 이동
  };

  return (
    <div id="welcome-container">
      {' '}
      {/* main.css에 정의된 ID 선택자 사용 */}
      <h2>Welcome to Smartglot!</h2>
      <p>Just put in a document and get your own glossary.</p>
      <p>Log in or sign up to start analyzing your text.</p>
      <button id="getStartedButton" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default WelcomePage;
