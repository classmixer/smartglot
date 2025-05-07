import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
// import './Header.css'; // Header.jsx에만 적용될 스타일이 있다면 만듭니다.

function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // 로그아웃 후 홈으로 이동
    } catch (error) {
      console.error('Failed to log out', error);
      // 사용자에게 에러 메시지를 보여줄 수 있습니다.
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <header>
      <h1>
        <Link
          to={currentUser ? '/analysis' : '/'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Smartglot
        </Link>
      </h1>
      <nav>
        {currentUser ? (
          <>
            <button
              onClick={handleProfileClick}
              className="profile-icon"
              title={currentUser.email}
            >
              {currentUser.email?.substring(0, 2).toUpperCase() || 'P'}
            </button>
            <button id="headerLogoutButton" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/auth?mode=login">
              <button id="headerLoginButton">Login</button>
            </Link>
            <Link to="/auth?mode=signup">
              <button id="headerSignupButton">Sign Up</button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
