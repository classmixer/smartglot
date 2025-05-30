import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PasswordInput from '../components/Auth/PasswordInput';

import './GoogleButton.css'; // Google 버튼 CSS 추가
// import './AuthPage.css'; // AuthPage에만 적용될 스타일이 있다면 만듭니다.

function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    currentUser,
    login,
    signup,
    loginWithGoogle,
    error: authError, // AuthContext에서 오는 에러는 authError로 명명
    setError: setAuthError, // AuthContext의 setError는 setAuthError로 명명
    emailVerificationNotice,
    setEmailVerificationNotice,
    sendVerificationEmail,
    loading: authLoading, // AuthContext의 로딩 상태
  } = useAuth();

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [formError, setFormError] = useState(''); // 이 컴포넌트 내의 폼 유효성 에러

  const clearInputsAndErrors = useCallback(() => {
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setFormError('');
    setAuthError(null); // AuthContext의 에러도 초기화
    setEmailVerificationNotice(null); // AuthContext의 알림도 초기화
  }, [setAuthError, setEmailVerificationNotice]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    const newIsLoginMode = mode !== 'signup';
    console.log(
      'Current mode in useEffect:',
      mode,
      'New isLoginMode:',
      newIsLoginMode,
      'Old isLoginMode:',
      isLoginMode,
    ); // 디버깅 로그
    if (isLoginMode !== newIsLoginMode) {
      console.log('Mode changed! Clearing inputs and setting new mode.'); // 디버깅 로그
      setIsLoginMode(newIsLoginMode);
      clearInputsAndErrors();
    }
    // URL이 변경될 때마다 (모드 변경 시 포함) 기존 에러/알림은 초기화하는 것이 좋을 수 있습니다.
    // clearInputsAndErrors(); // 이 위치로 옮기거나, 아래처럼 AuthContext의 에러만 초기화
    setAuthError(null); // AuthContext 에러만 초기화
    setFormError(''); // 페이지 내 폼 에러도 초기화
  }, [location.search, isLoginMode, clearInputsAndErrors, setAuthError]); // setAuthError 추가

  useEffect(() => {
    if (authError) {
      setFormError(authError.message || String(authError));
    } else {
      setFormError(''); // AuthContext의 에러가 없으면 폼 에러도 클리어
    }
  }, [authError]);

  // const handleSwitchMode = (e) => {
  // e.preventDefault();
  // const newMode = !isLoginMode;
  // navigate(newMode ? '/auth?mode=signup' : '/auth?mode=login');
  // // useEffect [location.search]가 setIsLoginMode와 clearInputs 등을 처리
  // };

  const validateForm = () => {
    if (!email.trim()) return '이메일을 입력해주세요.';
    if (!password) return '비밀번호를 입력해주세요.';
    if (!isLoginMode && password.length < 6)
      return '비밀번호는 6자 이상이어야 합니다.';
    if (!isLoginMode && password !== passwordConfirm)
      return '비밀번호가 일치하지 않습니다.';
    return null; // 에러 없음
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(''); // 이전 폼 에러 초기화
    setAuthError(null); // 이전 인증 에러 초기화

    const validationError = validateForm();
    if (validationError) {
      setFormError(validationError);
      return;
    }

    try {
      if (isLoginMode) {
        await login(email, password);
        // 성공 시 PrivateRoute가 /analysis로 리디렉션
      } else {
        const signedUpUser = await signup(email, password);
        if (signedUpUser) {
          // 회원가입 성공 후, AuthContext에서 emailVerificationNotice가 설정됨.
          // 사용자가 이메일 인증을 완료할 때까지 로그인 폼을 보여주기 위해 모드 전환.
          navigate('/auth?mode=login'); // useEffect[location.search]가 UI 업데이트
        }
      }
    } catch (err) {
      // AuthContext에서 에러 처리 및 로깅
      console.log(err);
    }
  };

  const handleGoogleLogin = async () => {
    setFormError('');
    setAuthError(null);
    try {
      await loginWithGoogle();
    } catch (_err) {
      // AuthContext에서 에러 처리 및 로깅
      console.log(_err);
    }
  };

  const handleResendVerification = async (e) => {
    e.preventDefault();
    if (currentUser && !currentUser.emailVerified) {
      try {
        await sendVerificationEmail(currentUser);
      } catch (err) {
        // AuthContext에서 에러 처리 및 로깅
        console.log(err);
      }
    }
  };

  if (authLoading && !currentUser) {
    // 초기 로딩 중이면서 아직 사용자 정보가 없을 때만 로딩 표시
    return (
      <div id="auth-container" style={{ textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div id="auth-container">
      {' '}
      {/* main.css에 정의된 ID 선택자 사용 */}
      <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
      {/* 이메일 인증 알림 (AuthContext에서 오는 메시지) */}
      {emailVerificationNotice && (
        <div id="email-verification-notice">
          {/* AuthContext에서 HTML을 포함한 메시지를 줄 수 있으므로 dangerouslySetInnerHTML 사용 */}
          <span
            dangerouslySetInnerHTML={{
              __html: emailVerificationNotice.split('. ')[0] + '.',
            }}
          />
          {currentUser &&
            !currentUser.emailVerified &&
            (emailVerificationNotice.includes('인증 메일을 확인해주세요') ||
              emailVerificationNotice.includes('계정 인증이 필요합니다')) && (
              <>
                <br />
                <a
                  href="#"
                  onClick={handleResendVerification}
                  style={{ fontSize: '0.9em' }}
                >
                  인증 이메일 재전송
                </a>
              </>
            )}
        </div>
      )}
      {/* 폼 에러 메시지 (Firebase 에러 또는 자체 유효성 검사 에러) */}
      {formError && <div id="error-message">{formError}</div>}
      <form
        onSubmit={handleSubmit}
        className={`auth-section ${isLoginMode ? 'login-form' : 'signup-form'}`}
      >
        <input
          type="email"
          id={isLoginMode ? 'loginEmail' : 'signupEmail'}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={formError && !email.trim() ? 'input-error' : ''}
          autoComplete="email"
          disabled={authLoading}
        />
        <PasswordInput
          id={isLoginMode ? 'loginPassword' : 'signupPassword'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={formError && !password ? 'input-error' : ''}
          autoComplete={isLoginMode ? 'current-password' : 'new-password'}
          disabled={authLoading}
        />

        {!isLoginMode && (
          <PasswordInput
            id="signupPasswordConfirm"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className={
              formError && password !== passwordConfirm ? 'input-error' : ''
            }
            autoComplete="new-password"
            disabled={authLoading}
          />
        )}

        <button
          type="submit"
          disabled={authLoading}
          style={{ backgroundColor: '#004aad' }}
        >
          {isLoginMode ? 'Login' : 'Sign Up'}
        </button>

        {/* Google Login Button */}
        <div style={{ marginTop: '10px' }}>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="gsi-material-button"
            disabled={authLoading}
          >
            <div className="gsi-material-button-state"></div>
            <div className="gsi-material-button-content-wrapper">
              <div className="gsi-material-button-icon">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{ display: 'block' }}
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className="gsi-material-button-contents">
                Sign in with Google
              </span>
              <span style={{ display: 'none' }}>Sign in with Google</span>
            </div>
          </button>
        </div>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        {isLoginMode ? "Don't have an account? " : 'Already have an account? '}
        <Link
          to={isLoginMode ? '/auth?mode=signup' : '/auth?mode=login'}
          onClick={(e) => {
            if (authLoading) {
              e.preventDefault();
            }
            // handleSwitchMode는 Link 컴포넌트 사용으로 인해 직접 호출할 필요가 없어졌습니다.
            // URL 변경은 Link to prop에 의해 처리되고,
            // useEffect[location.search]가 나머지 로직(모드 변경, 입력 초기화 등)을 담당합니다.
          }}
          style={
            authLoading
              ? { pointerEvents: 'none', opacity: 0.6, cursor: 'default' }
              : {}
          }
          aria-disabled={authLoading} // 접근성을 위해 유지
        >
          {isLoginMode ? 'Sign Up' : 'Login'}
        </Link>
      </p>
    </div>
  );
}

export default AuthPage;
