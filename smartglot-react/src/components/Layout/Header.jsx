import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

function Header({ onToggleSidebar }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth?mode=login');
    } catch (error) {
      console.error('Failed to log out:', error);
      // 사용자에게 에러 메시지를 보여줄 수 있습니다.
    }
  };

  return (
    <header className="app-header">
      <div className="header-left">
        {currentUser && (
          <button onClick={onToggleSidebar} className="sidebar-toggle-btn">
            ☰
          </button>
        )}
        <Link to={currentUser ? '/analysis' : '/'} className="logo-link">
          <h1>SmartGlot</h1>
        </Link>
      </div>
      <nav className="header-nav">
        {currentUser ? (
          <>
            <Link to="/analysis">Analysis</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/auth?mode=login">Login</Link>
            <Link to="/auth?mode=signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
