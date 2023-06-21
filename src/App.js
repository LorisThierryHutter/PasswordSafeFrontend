import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import VerifyEmail from './components/Auth/VerifyEmail';
import ResetPassword from './components/Auth/ResetPassword';
import TwoFactorAuthentication from './components/Auth/TwoFactorAuthentication';
import Dashboard from './components/Dashboard/Dashboard';
import ProfileSettings from './components/Profile/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/Homepage';

const App = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/2fa" element={<TwoFactorAuthentication />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />
          <Route path="/profile/settings" element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    );
  };
export default App;
