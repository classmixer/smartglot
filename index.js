/* global auth */

const errorMessageDiv = document.getElementById('error-message');
const loginEmailInput = document.getElementById('loginEmail');
const loginPasswordInput = document.getElementById('loginPassword');
const signupButton = document.getElementById('signupButton');

// DOM Elements
const signupEmailInput = document.getElementById('signupEmail');
const signupPasswordInput = document.getElementById('signupPassword');
const signupPasswordConfirmInput = document.getElementById(
  'signupPasswordConfirm',
);
const loginButton = document.getElementById('loginButton');
[
  {
    tool_name: 'read_file',
    tool_args: {
      target_file: 'index.js',
      explanation:
        "index.js 파일의 전체 내용을 읽어 'errorMessageDiv' 및 다른 정의되지 않은 변수 오류를 해결하기 위해 컨텍스트를 파악합니다.",
      should_read_entire_file: true,
    },
  },
];

// Function to display error messages
function showAuthError(message) {
  errorMessageDiv.textContent = message;
}

// Function to clear error messages and input styles
function clearAuthError() {
  errorMessageDiv.textContent = '';
  signupPasswordInput.classList.remove('input-error');
  signupPasswordConfirmInput.classList.remove('input-error');
  loginEmailInput.classList.remove('input-error');
  loginPasswordInput.classList.remove('input-error');
  signupEmailInput.classList.remove('input-error');
}

// --- Authentication Logic ---

// Sign Up
signupButton.addEventListener('click', async () => {
  clearAuthError();
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;
  const passwordConfirm = signupPasswordConfirmInput.value;

  if (password !== passwordConfirm) {
    showAuthError('Passwords do not match.');
    signupPasswordInput.classList.add('input-error');
    signupPasswordConfirmInput.classList.add('input-error');
    return;
  }

  if (!email || !password) {
    showAuthError('Email and password cannot be empty.');
    if (!email) signupEmailInput.classList.add('input-error');
    if (!password) signupPasswordInput.classList.add('input-error');
    if (!passwordConfirm)
      signupPasswordConfirmInput.classList.add('input-error');
    return;
  }

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    console.log('User signed up successfully!');
    signupEmailInput.value = '';
    signupPasswordInput.value = '';
    signupPasswordConfirmInput.value = '';
  } catch (error) {
    console.error('Sign up failed:', error);
    if (
      error.code === 'auth/invalid-email' ||
      error.code === 'auth/email-already-in-use'
    ) {
      signupEmailInput.classList.add('input-error');
    } else if (error.code === 'auth/weak-password') {
      signupPasswordInput.classList.add('input-error');
      signupPasswordConfirmInput.classList.add('input-error');
    }
    showAuthError(`Sign up failed: ${error.message}`);
  }
});

// Login
loginButton.addEventListener('click', async () => {
  clearAuthError();
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  if (!email || !password) {
    showAuthError('Email and password cannot be empty.');
    if (!email) loginEmailInput.classList.add('input-error');
    if (!password) loginPasswordInput.classList.add('input-error');
    return;
  }

  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log('User logged in successfully!');
    loginEmailInput.value = '';
    loginPasswordInput.value = '';
  } catch (error) {
    console.error('Login failed:', error);
    if (
      error.code === 'auth/invalid-email' ||
      error.code === 'auth/user-not-found' ||
      error.code === 'auth/invalid-credential'
    ) {
      loginEmailInput.classList.add('input-error');
    }
    if (
      error.code === 'auth/wrong-password' ||
      error.code === 'auth/invalid-credential'
    ) {
      loginPasswordInput.classList.add('input-error');
    }
    showAuthError(`Login failed: ${error.message}`);
  }
});

// Logout
// ... 기존 코드 ...

// Listen for Auth State Changes
auth.onAuthStateChanged((user) => {
  clearAuthError();
  if (!user) {
    loginEmailInput.value = '';
    loginPasswordInput.value = '';
    signupEmailInput.value = '';
    signupPasswordInput.value = '';
    signupPasswordConfirmInput.value = '';
  }
});
