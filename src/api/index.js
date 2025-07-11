// src/api/index.js
import axios from 'axios';

// This picks up REACT_APP_API_URL from your .env, or defaults to localhost
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Automatically send the token on every request, except for static assets
API.interceptors.request.use(req => {
  const token = localStorage.getItem('token');

  // List of paths that should NOT have Authorization headers
  const excludedPaths = ['manifest.json', 'favicon.ico', 'logo192.png', 'logo512.png', 'robots.txt'];

  const isExcluded = excludedPaths.some(path => req.url.includes(path));

  if (token && !isExcluded) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
