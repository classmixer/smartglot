import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useOutletContext,
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
  mainMarginLeft,
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
        marginLeft: isSidebarOpen ? mainMarginLeft : '0',
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
  const outletContext = useOutletContext();

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <p>Loading user...</p>
      </div>
    );
  }
  return currentUser ? (
    <Outlet context={outletContext} />
  ) : (
    <Navigate to="/auth" replace />
  );
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
  const [mainMarginLeft, setMainMarginLeft] = useState('300px');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setMainMarginLeft('100%');
      } else if (window.innerWidth <= 768) {
        setMainMarginLeft('280px');
      } else {
        setMainMarginLeft('300px');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(
    '[App.jsx] Current selectedHistoryItem state:',
    selectedHistoryItem,
  );

  const handleSetSelectedHistoryItem = (item) => {
    console.log('[App.jsx] setSelectedHistoryItem called with:', item);
    setSelectedHistoryItem(item);
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
                setSelectedHistoryItem={handleSetSelectedHistoryItem}
                selectedHistoryItem={selectedHistoryItem}
                mainMarginLeft={mainMarginLeft}
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
