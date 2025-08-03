import axios from 'axios';

export const taskPROapi = axios.create({
  baseURL: 'https://taskpro-backend-y1x7.onrender.com/',
});

export const setToken = (accessToken) =>
  (taskPROapi.defaults.headers.common.Authorization = `Bearer ${accessToken}`);

export const clearToken = () =>
  (taskPROapi.defaults.headers.common.Authorization = '');
