import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');

  const handleLogin = () => {
    // Send email and OTP to the backend for validation
    // On successful login, redirect to the calendar page
  };

  return (
    <div>
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="OTP" value={otp} onChange={e => setOTP(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
