import React, { useState } from 'react';

function PasswordInput({ id, placeholder, value, onChange, className = '' }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`password-wrapper ${className}`}>
      {' '}
      {/* main.css의 .password-wrapper 스타일 사용 */}
      <input
        type={showPassword ? 'text' : 'password'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // required // 필요에 따라 추가
      />
      <button
        type="button"
        className="toggle-password"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        onClick={togglePasswordVisibility}
      >
        {/* public 폴더에 이미지들이 있다고 가정 */}
        <img
          src={
            showPassword ? '/eye-password-show.svg' : '/eye-password-hide.svg'
          }
          alt={showPassword ? 'Hide password' : 'Show password'}
        />
      </button>
    </div>
  );
}

export default PasswordInput;
