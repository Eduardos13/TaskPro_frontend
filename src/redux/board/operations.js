import { createAsyncThunk } from '@reduxjs/toolkit';
import { taskPROapi } from '../../config/taskPROapi.js';

export const getAllBoardsThunk = createAsyncThunk(
  'getAllBoards',
  async (_, thunkAPI) => {
    try {
      const { data } = await taskPROapi.get('boards');
      return data.boards;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBoardThunk = createAsyncThunk(
  'createBoard',
  async (body, thunkAPI) => {
    try {
      const payload = body?.title
        ? body
        : { title: body?.boardTitle?.trim() || '' };
      const { data } = await taskPROapi.post('boards', payload);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
