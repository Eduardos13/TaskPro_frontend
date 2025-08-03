import axios from 'axios';

export const taskPROapi = axios.create({
  baseURL: 'https://taskpro-backend-y1x7.onrender.com/',
});
