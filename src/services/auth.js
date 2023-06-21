import { postRequest } from './api';

const API_BASE_URL = 'https://passwordSafe.loris-hutter.ch/api'; // Replace with your API base URL

// Example function for signing in
export const signIn = async (email, password) => {
  const data = {
    email,
    password,
  };

  const response = await postRequest(`${API_BASE_URL}/auth/signin`, data);
  // Handle response, store token, etc.
};

// Example function for signing up
export const signUp = async (firstName, lastName, email, password, phoneNumber) => {
  const data = {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  };

  const response = await postRequest(`${API_BASE_URL}/auth/signup`, data);
  // Handle response, display success message, etc.
};

// Example function for verifying email
export const verifyEmail = async () => {
  const response = await postRequest(`${API_BASE_URL}/auth/verify-email`);
  // Handle response, display success message, etc.
};

// Example function for resetting password
export const resetPassword = async (email) => {
  const data = {
    email,
  };

  const response = await postRequest(`${API_BASE_URL}/auth/reset-password`, data);
  // Handle response, display success message, etc.
};
