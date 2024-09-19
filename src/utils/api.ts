// api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("error",error);
    if (error.response && error.response.status === 401 || error.response.status === 500) {
      localStorage.clear();
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}`;
    }
    return Promise.reject(error);
  }
);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
