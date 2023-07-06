import React, { useState } from 'react';
import auth, { signUp } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
class SignUp extends React.Component{

  componentDidMount(){
    auth.getSignUp().then((response) => {
      this.setState({signUp: response.data})
    });
  }

  render() {
    return (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
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
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
    );
  }

}

const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    await signUp(firstName, lastName, email, password, phoneNumber);
    // Display success message or perform necessary actions upon successful sign-up
    navigate('/dashboard');
  } catch (error) {
    // Handle sign-up error
  }
};

export default SignUp;
