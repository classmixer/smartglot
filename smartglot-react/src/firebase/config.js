// Firebase SDK v9 compat imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';
import 'firebase/compat/database';

// Firebase 구성
// 중요: 실제 프로젝트에서는 이 값을 환경 변수 등으로 안전하게 관리하는 것이 좋습니다.
const firebaseConfig = {
  apiKey: 'AIzaSyA0iVwY44v9lokoS2Zm_jl9pYc8pV6Nje8', // 실제 API 키로 교체해야 합니다.
  authDomain: 'smartglot.firebaseapp.com',
  projectId: 'smartglot',
  storageBucket: 'smartglot.firebasestorage.app',
  messagingSenderId: '516870202505',
  appId: '1:516870202505:web:377f047b4883a84fd69366',
  measurementId: 'G-F0531X25FB',
  databaseURL:
    'https://smartglot-default-rtdb.asia-southeast1.firebasedatabase.app/', // Realtime Database URL 추가
};

// Firebase 앱 초기화 (이미 초기화되지 않은 경우에만)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // 이미 초기화된 경우 기존 앱 사용
}

// Firebase 서비스 내보내기
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();
const database = firebase.database();
// const firestore = firebase.firestore(); // Firestore를 사용한다면 주석 해제

export { firebase, auth, storage, functions, database /*, firestore */ };
export default firebaseConfig;
