import React from 'react';
import { verifyEmail } from '../../services/auth';

const VerifyEmail = () => {
  const handleVerifyEmail = async () => {
    try {
      await verifyEmail();
      // Display success message or perform necessary actions upon successful email verification
    } catch (error) {
      // Handle verification error
    }
  };

  return (
    <div>
      <h2>Verify Email</h2>
      <button onClick={handleVerifyEmail}>Verify Email</button>
    </div>
  );
};

export default VerifyEmail;
