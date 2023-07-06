import { postRequest, getRequest } from './api';
import axios from "axios";

const GET_ENTRIES = 'https://localhost:9090/entries/all'; // Replace with your API base URL

class entry{
  getEntries(){
    return axios.get(GET_ENTRIES);
  }

}

export default new entry();


// Example function for creating a new entry
export const createEntry = async (websiteUrl, username, password) => {
  const data = {
    websiteUrl,
    username,
    password,
  };

  const response = await postRequest(`${GET_ENTRIES}`, data);
  // Handle response, display success message, etc.
};

// Example function for retrieving entry list
export const getEntryList = async () => {
  const response = await getRequest(`${GET_ENTRIES}`);
  // Handle response, retrieve entry list data, etc.
};

// Example function for updating an entry
export const updateEntry = async (entryId, websiteUrl, username, password) => {
  const data = {
    websiteUrl,
    username,
    password,
  };

  const response = await postRequest(`${GET_ENTRIES}/${entryId}`, data);
  // Handle response, display success message, etc.
};

// Example function for deleting an entry
export const deleteEntry = async (entryId) => {
  const response = await postRequest(`${GET_ENTRIES}/${entryId}/delete`);
  // Handle response, display success message, etc.
};
