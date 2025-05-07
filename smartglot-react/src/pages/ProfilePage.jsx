import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PasswordInput from '../components/Auth/PasswordInput'; // 재사용
// import './ProfilePage.css'; // ProfilePage에만 적용될 스타일이 있다면 만듭니다.

function ProfilePage() {
  const navigate = useNavigate();
  const {
    currentUser,
    changeUserPassword,
    deleteUserAccount,
    error: authError,
    setError: setAuthError,
    loading: authLoading,
  } = useAuth();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [message, setMessage] = useState(''); // 성공 또는 일반 메시지
  const [formError, setFormError] = useState(''); // 이 페이지 내의 폼 에러

  useEffect(() => {
    // AuthContext에서 오는 에러를 이 페이지의 에러로 설정
    if (authError) {
      setFormError(authError.message || String(authError));
      setMessage(''); // 에러 발생 시 성공 메시지는 초기화
    } else {
      setFormError('');
    }
  }, [authError]);

  // 페이지 벗어날 때 또는 모드 변경 시 에러/메시지 초기화
  useEffect(() => {
    return () => {
      setAuthError(null);
      setMessage('');
      setFormError('');
    };
  }, [setAuthError]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setFormError('');
    setMessage('');
    setAuthError(null);

    if (!currentPassword || !newPassword || !newPasswordConfirm) {
      setFormError('모든 비밀번호 필드를 입력해주세요.');
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      setFormError('새 비밀번호가 일치하지 않습니다.');
      return;
    }
    if (newPassword.length < 6) {
      setFormError('새 비밀번호는 6자 이상이어야 합니다.');
      return;
    }

    try {
      const successMessage = await changeUserPassword(
        currentPassword,
        newPassword,
      );
      setMessage(successMessage || '비밀번호가 성공적으로 변경되었습니다.');
      setCurrentPassword('');
      setNewPassword('');
      setNewPasswordConfirm('');
    } catch (err) {
      // 에러는 useEffect[authError]를 통해 formError에 설정됨
      console.error('Password change failed on page:', err);
    }
  };

  const handleDeleteAccount = async () => {
    setFormError('');
    setMessage('');
    setAuthError(null);

    if (
      window.confirm(
        '정말 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
      )
    ) {
      try {
        await deleteUserAccount();
        // 성공 시 AuthContext의 onAuthStateChanged가 사용자를 null로 만들고,
        // App.jsx의 PrivateRoute가 /auth 또는 홈으로 리디렉션
        // navigate('/'); // AuthContext에서 처리하므로 여기서 직접 이동 불필요
      } catch (err) {
       console.error("Account deletion failed on page:", err)
      }
    }
  };

  if (authLoading || !currentUser) {
    // currentUser가 없으면 PrivateRoute에 의해 이 페이지에 도달하지 않아야 함
    // 로딩 중이거나, 혹은 currentUser가 아직 설정되지 않은 극히 짧은 순간을 위해
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <p>Loading profile...</p>
      </div>
    );
  }

  // 이메일 미인증 사용자에 대한 처리 (선택적 - 비밀번호 변경/계정 삭제 제한)
  const isEmailPasswordUser = currentUser.providerData.some(
    (p) => p.providerId === 'password',
  );
  const needsVerificationForActions =
    isEmailPasswordUser && !currentUser.emailVerified;

  return (
    <div id="profile-container">
      {' '}
      {/* main.css의 ID 선택자 활용 */}
      <h2>Profile</h2>
      <p id="profile-email">Email: {currentUser.email}</p>
      {needsVerificationForActions && (
        <p
          style={{
            color: 'orange',
            border: '1px solid orange',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          비밀번호 변경 또는 계정 삭제를 위해서는 먼저 이메일 인증을
          완료해주세요.
        </p>
      )}
      <div
        style={{
          marginTop: '20px',
          paddingTop: '15px',
          borderTop: '1px solid #eee',
        }}
      >
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordChange}>
          <PasswordInput
            id="currentPassword"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            disabled={authLoading || needsVerificationForActions}
          />
          <PasswordInput
            id="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={authLoading || needsVerificationForActions}
          />
          <PasswordInput
            id="newPasswordConfirm"
            placeholder="Confirm New Password"
            value={newPasswordConfirm}
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
            disabled={authLoading || needsVerificationForActions}
          />
          <button
            id="changePasswordButton"
            type="submit"
            disabled={authLoading || needsVerificationForActions}
          >
            Change Password
          </button>
        </form>
        {message && (
          <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>
        )}
        {formError && (
          <p
            id="password-change-message"
            style={{ color: 'red', marginTop: '10px' }}
          >
            {formError}
          </p>
        )}
      </div>
      <button
        id="backToAnalysisButton"
        onClick={() => navigate('/analysis')}
        style={{ marginTop: '20px' }}
        disabled={authLoading}
      >
        Back to Analysis
      </button>
      <button
        id="deleteAccountButton"
        onClick={handleDeleteAccount}
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          marginTop: '20px',
          marginLeft: '10px',
        }}
        disabled={authLoading || needsVerificationForActions}
      >
        Delete Account
      </button>
      {/* <p id="profile-error-message" style={{ color: 'red', marginTop: '10px' }}></p> */}
      {/* formError가 전반적인 프로필 에러 메시지로 사용될 수 있음 */}
    </div>
  );
}

export default ProfilePage;
