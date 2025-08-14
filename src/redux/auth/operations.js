import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, setToken, taskPROapi } from '../../config/taskPROapi.js';
import { getAllBoardsThunk } from '../board/operations.js';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await taskPROapi.post('auth/register', credentials);
      setToken(data.accesseToken);
      thunkAPI.dispatch(getAllBoardsThunk());
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await taskPROapi.post('auth/login', credentials);
      setToken(data.accesseToken);
      thunkAPI.dispatch(getAllBoardsThunk());
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await taskPROapi.post('auth/logout');
    clearToken();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
