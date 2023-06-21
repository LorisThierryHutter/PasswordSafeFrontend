import React, { useState } from 'react';
import { updateProfile, updatePassword, toggleTwoFactorAuth } from '../../services/user';

const ProfileSettings = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isTwoFactorAuthEnabled, setIsTwoFactorAuthEnabled] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(firstName, lastName);
      // Display success message or perform necessary actions upon profile update
    } catch (error) {
      // Handle profile update error
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(password);
      // Display success message or perform necessary actions upon password update
    } catch (error) {
      // Handle password update error
    }
  };

  const handleToggleTwoFactorAuth = async () => {
    try {
      await toggleTwoFactorAuth();
      setIsTwoFactorAuthEnabled(!isTwoFactorAuthEnabled);
      // Display success message or perform necessary actions upon two-factor authentication toggle
    } catch (error) {
      // Handle two-factor authentication toggle error
    }
  };

  return (
    <div>
      <h2>Profile Settings</h2>
      <div>
        <h3>Update Profile</h3>
        <form onSubmit={handleUpdateProfile}>
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
          <button type="submit">Save</button>
        </form>
      </div>
      <div>
        <h3>Update Password</h3>
        <form onSubmit={handleUpdatePassword}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <div>
        <h3>Two-Factor Authentication</h3>
        <label>
          <input
            type="checkbox"
            checked={isTwoFactorAuthEnabled}
            onChange={handleToggleTwoFactorAuth}
          />
          Enable Two-Factor Authentication
        </label>
      </div>
    </div>
  );
};

export default ProfileSettings;
