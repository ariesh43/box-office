import axios from 'axios';

const API_BASE_URL = 'https://api.tvmaze.com';
export const apiGet = async queryString => {
  const response = await axios.get(`${API_BASE_URL}${queryString}`);
  return response.data;
};
