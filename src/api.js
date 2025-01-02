import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY; 



export const fetchImages = (query) =>
  axios.get(`${API_URL}/search/photos`, {
    params: { query, per_page: 20 },
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });
