// src/api/index.js
import axios from 'axios';

// this picks up REACT_APP_API_URL from your .env
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// automatically send the token on every request
API.interceptors.request.use(req => {
  const token = localStorage.getItem('token');            // or pull from Redux
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
