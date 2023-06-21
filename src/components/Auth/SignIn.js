import React, { useState } from 'react';
import { signIn } from '../../services/auth';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      // Redirect to dashboard or perform necessary actions upon successful sign-in
        history.push('/dashboard');
    } catch (error) {
      // Handle sign-in error
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
