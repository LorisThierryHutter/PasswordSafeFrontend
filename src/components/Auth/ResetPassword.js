import React, { useState } from 'react';
import { resetPassword } from '../../services/auth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      // Display success message or perform necessary actions upon successful password reset request
    } catch (error) {
      // Handle reset password error
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
