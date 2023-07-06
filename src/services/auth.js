import { postRequest } from './api';
import axios from 'axios';

const SIGNUP_API = 'https://localhost:9090/signup'; // Replace with your API base URL
const DASHBOARD_API = 'https://localhost:9090/dashboard'; // Replace with your API base URL
const LOGIN_API = 'https://localhost:9090/'; // Replace with your API base URL
const PWD_UPDATE = 'http://localhost:9090/{id}/updateUser';


class auth{
  getSignUp(){
    return axios.get(SIGNUP_API);
  }

  getDashboard(){
    return axios.get(DASHBOARD_API);
  }

  getSignIn(){
    return axios.get(LOGIN_API);
  }


}

export default new auth();

// Example function for signing in
export const signIn = async (email, password) => {
  const data = {
    email,
    password,
  };

  const response = await postRequest(`${LOGIN_API}`, data);
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

  const response = await postRequest(`${SIGNUP_API}/auth/signup`, data);
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

  const response = await postRequest(`${PWD_UPDATE}`, data);
  // Handle response, display success message, etc.
};
