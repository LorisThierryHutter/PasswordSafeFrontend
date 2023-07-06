// This file contains functions for making API requests

// Example function for making a POST request
export const postRequest = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error('Request failed');
    }
  };
  
  // Example function for making a GET request
  export const getRequest = async (url) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error('Request failed');
    }
  };
  
  export const authenticatedPostRequest = async (url, data, token) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error('Request failed');
    }
  };
  