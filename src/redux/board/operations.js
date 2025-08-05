import { createAsyncThunk } from '@reduxjs/toolkit';
import { taskPROapi } from '../../config/taskPROapi';

export const getAllBoards = createAsyncThunk(
  'getBoards',
  async (_, thunkAPI) => {
    try {
      const { data } = await taskPROapi.get('boards');
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBoard = createAsyncThunk(
  'createBoard',
  async (body, thunkAPI) => {
    try {
      const { data } = await taskPROapi.post('boards', body);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
