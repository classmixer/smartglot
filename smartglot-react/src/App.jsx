import React from 'react';
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

// 공통 레이아웃 컴포넌트 정의
const MainLayout = () => (
  <>
    <Header />
    <main className="container">
      <Outlet />
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
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
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
