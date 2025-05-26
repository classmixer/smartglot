import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import WelcomePage from './pages/WelcomePage';
import AuthPage from './pages/AuthPage';
import AnalysisPage from './pages/AnalysisPage';
import ProfilePage from './pages/ProfilePage';
import HistorySidebar from './components/HistorySidebar';

// 공통 레이아웃 컴포넌트 정의
const MainLayout = ({
  isSidebarOpen,
  toggleSidebar,
  setSelectedHistoryItem,
  selectedHistoryItem,
}) => (
  <>
    <Header onToggleSidebar={toggleSidebar} />
    <HistorySidebar
      isOpen={isSidebarOpen}
      onClose={toggleSidebar}
      onSelectHistory={setSelectedHistoryItem}
    />
    <main
      className="container"
      style={{
        marginLeft: isSidebarOpen ? '300px' : '0',
        transition: 'margin-left 0.3s ease-in-out',
      }}
    >
      <Outlet context={{ selectedHistoryItem, setSelectedHistoryItem }} />
    </main>
  </>
);

// 인증된 사용자만 접근 가능한 라우트
function PrivateRoute() {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <p>Loading user...</p>
      </div>
    );
  }
  return currentUser ? <Outlet /> : <Navigate to="/auth" replace />;
}

// 로그인/회원가입 페이지는 이미 로그인한 경우 분석 페이지로 리디렉션
function PublicRouteOnly() {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <p>Loading user...</p>
      </div>
    );
  }
  return !currentUser ? <Outlet /> : <Navigate to="/analysis" replace />;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            element={
              <MainLayout
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                setSelectedHistoryItem={setSelectedHistoryItem}
                selectedHistoryItem={selectedHistoryItem}
              />
            }
          >
            <Route element={<PublicRouteOnly />}>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/analysis" element={<AnalysisPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
