import { createAsyncThunk } from '@reduxjs/toolkit';
import { taskPROapi } from '../../config/taskPROapi';

export const getAllBoardsThunk = createAsyncThunk(
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

export const createBoardThunk = createAsyncThunk(
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
