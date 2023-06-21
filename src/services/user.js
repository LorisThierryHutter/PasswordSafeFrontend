import { postRequest } from './api';

const API_BASE_URL = 'http://example.com/api'; // Replace with your API base URL

// Example function for updating profile
export const updateProfile = async (firstName, lastName) => {
  const data = {
    firstName,
    lastName,
  };

  const response = await postRequest(`${API_BASE_URL}/user/profile`, data);
  // Handle response, display success message, etc.
};

// Example function for updating password
export const updatePassword = async (password) => {
  const data = {
    password,
  };

  const response = await postRequest(`${API_BASE_URL}/user/password`, data);
  // Handle response, display success message, etc.
};

// Example function for toggling two-factor authentication
export const toggleTwoFactorAuth = async () => {
  const response = await postRequest(`${API_BASE_URL}/user/toggle-2fa`);
  // Handle response, display success message, etc.
};
