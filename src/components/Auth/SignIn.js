import React, { useState } from 'react';
import auth, { signIn } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

class SignIn extends React.Component{

  componentDidMount(){
    auth.getSignIn().then((response) => {
      this.setState({login: response.data})
    });
  }

  render() {
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
  }
}

const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignIn = async (e) => {
  e.preventDefault();
  try {
    await signIn(email, password);
    // Redirect to dashboard or perform necessary actions upon successful sign-in
    navigate('/dashboard');
  } catch (error) {
    // Handle sign-in error
  }
};

export default SignIn;
