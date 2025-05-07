import React, { createContext, useContext, useEffect, useState } from 'react';
import { firebase, auth, functions } from '../firebase/config'; // Firebase 설정 import

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [emailVerificationNotice, setEmailVerificationNotice] = useState(null);

  // Firebase에서 제공하는 Google Auth Provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  async function signup(email, password) {
    setError(null);
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await userCredential.user.sendEmailVerification();
      setEmailVerificationNotice(
        '회원가입이 거의 완료되었습니다! 이메일을 확인하여 계정을 인증해주세요. 인증 후 로그인할 수 있습니다.',
      );
      // onAuthStateChanged가 currentUser를 업데이트할 것임
      return userCredential.user;
    } catch (e) {
      console.error('Signup failed:', e);
      setError(e.message);
      throw e;
    }
  }

  async function login(email, password) {
    setError(null);
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password,
      );
      // onAuthStateChanged가 currentUser를 업데이트하고 emailVerified를 확인할 것임
      return userCredential.user;
    } catch (e) {
      console.error('Login failed:', e);
      setError(e.message);
      throw e;
    }
  }

  async function loginWithGoogle() {
    setError(null);
    try {
      const userCredential = await auth.signInWithPopup(googleProvider);
      // onAuthStateChanged가 currentUser를 업데이트할 것임
      return userCredential.user;
    } catch (e) {
      console.error('Google login failed:', e);
      setError(e.message);
      throw e;
    }
  }

  async function logout() {
    setError(null);
    setEmailVerificationNotice(null);
    try {
      await auth.signOut();
      // onAuthStateChanged가 currentUser를 null로 설정할 것임
    } catch (e) {
      console.error('Logout failed:', e);
      setError(e.message);
      throw e;
    }
  }

  async function sendVerificationEmail(user) {
    if (!user) return;
    try {
      await user.sendEmailVerification();
      setEmailVerificationNotice(
        '인증 이메일이 다시 전송되었습니다. 이메일함을 확인해주세요.',
      );
    } catch (e) {
      console.error('Error resending verification email:', e);
      setError('인증 이메일 재전송에 실패했습니다: ' + e.message);
      throw e;
    }
  }

  // 비밀번호 변경
  async function changeUserPassword(currentPassword, newPassword) {
    setError(null);
    if (!currentUser) throw new Error('User not logged in');
    try {
      const credential = firebase.auth.EmailAuthProvider.credential(
        currentUser.email,
        currentPassword,
      );
      await currentUser.reauthenticateWithCredential(credential);
      await currentUser.updatePassword(newPassword);
      return '비밀번호가 성공적으로 변경되었습니다.';
    } catch (e) {
      console.error('Password change failed:', e);
      setError(e.message);
      throw e;
    }
  }

  // 계정 삭제
  async function deleteUserAccount() {
    setError(null);
    if (!currentUser) throw new Error('User not logged in');
    try {
      await currentUser.delete();
      // onAuthStateChanged가 처리
    } catch (e) {
      console.error('Account deletion failed:', e);
      setError(e.message);
      throw e;
    }
  }

  // PDF 분석 함수 호출 (Firebase Functions)
  async function analyzePdfWithCloudFunction(storagePath) {
    if (!currentUser) throw new Error('User not logged in for PDF analysis.');
    try {
      const analyzePdfFunction = functions.httpsCallable('analyzePdf');
      const result = await analyzePdfFunction({ storagePath });
      return result.data; // 함수는 result.data에 결과를 반환
    } catch (error) {
      console.error('PDF analysis function call failed:', error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setError(null); // 상태 변경 시 이전 에러 초기화
      setEmailVerificationNotice(null); // 상태 변경 시 이전 알림 초기화

      if (user) {
        await user.reload(); // 최신 사용자 상태 가져오기 (특히 emailVerified)
        if (
          user.emailVerified ||
          user.providerData.some((p) => p.providerId !== 'password')
        ) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null); // 이메일 미인증 시 분석 화면으로 넘어가지 않도록 null 처리
          setEmailVerificationNotice(
            `계정 인증이 필요합니다. ${user.email} 주소로 발송된 인증 메일을 확인해주세요. 인증이 확인되면 자동으로 로그인됩니다.`,
          );
          // 여기서 주기적으로 emailVerified 상태를 폴링하거나, 사용자가 직접 재로그인하도록 유도할 수 있습니다.
          // 현재 구현은 재로그인 또는 페이지 새로고침 시 onAuthStateChanged가 다시 실행되어 확인합니다.
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe; // 컴포넌트 언마운트 시 구독 해제
  }, []);

  const value = {
    currentUser,
    loading,
    error,
    setError, // 외부에서 에러를 직접 설정할 수 있도록 추가 (예: 폼 유효성 검사)
    emailVerificationNotice,
    setEmailVerificationNotice,
    signup,
    login,
    loginWithGoogle,
    logout,
    sendVerificationEmail,
    changeUserPassword,
    deleteUserAccount,
    analyzePdfWithCloudFunction,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* 로딩이 완료된 후에만 자식 컴포넌트 렌더링 */}
    </AuthContext.Provider>
  );
}
