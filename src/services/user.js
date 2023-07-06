import { postRequest } from './api';
import axios from "axios";

const USER_API = 'http://localhost:9090/user/{id}'; // Replace with your API base URL
const USER_UPDATE = 'http://localhost:9090/{id}/updateUser';

class user{
  getUsers(){
    return axios.get(USER_API);
  }

  updateUser(){
    return axios.get(USER_UPDATE)
  }

}
export default new user();


// Example function for updating profile
export const updateProfile = async (firstName, lastName) => {
  const data = {
    firstName,
    lastName,
  };

  const response = await postRequest(`${USER_UPDATE}`, data);
  // Handle response, display success message, etc.
};

// Example function for updating password
export const updatePassword = async (password) => {
  const data = {
    password,
  };

  const response = await postRequest(`${USER_UPDATE}`, data);
  // Handle response, display success message, etc.
};

// Example function for toggling two-factor authentication
export const toggleTwoFactorAuth = async () => {
  const response = await postRequest(`${USER_API}/user/toggle-2fa`);
  // Handle response, display success message, etc.
};
