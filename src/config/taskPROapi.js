import axios from 'axios';

export const taskPROapi = axios.create({
  baseURL: 'https://taskpro-backend-y1x7.onrender.com/',
});

export const setToken = (token) => {
  taskPROapi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  delete taskPROapi.defaults.headers.common.Authorization;
};
