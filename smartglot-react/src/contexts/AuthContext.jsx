import React, { createContext, useContext, useEffect, useState } from 'react';
import { firebase, auth, functions, database } from '../firebase/config'; // Firebase 설정 import

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
      return userCredential.user;
    } catch (e) {
      console.error('Login failed in AuthContext:', e);
      if (e.code === 'auth/invalid-credential') {
        // fetchSignInMethodsForEmail을 여기서 호출하지 않고,
        // 일반적인 로그인 실패 메시지와 함께 Google 로그인 가능성을 안내합니다.
        const specificMessage =
          '이메일 또는 비밀번호가 잘못되었습니다. Google 계정으로 가입하셨다면 Google 로그인을 이용해 보세요.';
        setError(specificMessage);
        throw new Error(specificMessage); // AuthPage로 에러를 전달
      } else {
        // auth/invalid-credential 이외의 다른 Firebase 에러 코드들
        // (예: auth/user-not-found, auth/wrong-password, auth/too-many-requests 등)
        setError(e.message); // Firebase에서 제공하는 기본 에러 메시지 사용
        throw e;
      }
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
  async function analyzePdfWithCloudFunction(storagePath, originalFileName) {
    if (!currentUser) throw new Error('User not logged in for PDF analysis.');
    try {
      const analyzePdfFunction = functions.httpsCallable('analyzePdf');
      const result = await analyzePdfFunction({ storagePath });

      // 분석 성공 시 기록 저장
      if (result.data && result.data.length > 0) {
        await saveAnalysisToHistory(originalFileName, storagePath, result.data);
      }

      return result.data;
    } catch (error) {
      console.error('PDF analysis function call failed:', error);
      throw error;
    }
  }

  // 새로운 함수: 분석 기록 저장
  async function saveAnalysisToHistory(fileName, storagePath, terms) {
    if (!currentUser) return;
    const historyRef = database.ref(`histories/${currentUser.uid}`);
    const newHistoryEntryRef = historyRef.push(); // 고유 키 생성
    try {
      await newHistoryEntryRef.set({
        fileName: fileName,
        storagePath: storagePath, // 나중에 재분석 또는 파일 접근을 위해 저장
        termsCount: terms.length,
        topTerms: terms.slice(0, 3).map((t) => t.term), // 상위 3개 용어 미리보기용
        analysisDate: firebase.database.ServerValue.TIMESTAMP, // 서버 시간으로 기록
        result: terms, // 전체 분석 결과 저장
      });
      console.log('Analysis history saved for:', fileName);
    } catch (e) {
      console.error('Failed to save analysis history:', e);
      // 여기서 사용자에게 알림을 줄 수도 있습니다.
    }
  }

  // 새로운 함수: 분석 기록 조회
  async function getAnalysisHistory() {
    if (!currentUser) return [];
    try {
      const historyRef = database
        .ref(`histories/${currentUser.uid}`)
        .orderByChild('analysisDate') // 날짜순으로 정렬 (내림차순은 클라이언트에서 처리)
        .limitToLast(20); // 최근 20개 기록만 가져오기 (성능 고려)
      const snapshot = await historyRef.once('value');
      const historyData = [];
      snapshot.forEach((childSnapshot) => {
        historyData.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      return historyData.reverse(); // 최신순으로 클라이언트에서 뒤집기
    } catch (e) {
      console.error('Failed to fetch analysis history:', e);
      return []; // 오류 발생 시 빈 배열 반환
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
    saveAnalysisToHistory,
    getAnalysisHistory,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* 로딩이 완료된 후에만 자식 컴포넌트 렌더링 */}
    </AuthContext.Provider>
  );
}
