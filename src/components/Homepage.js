import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Password Safe App!</h2>
      <p>Please select an option:</p>
      <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default HomePage;