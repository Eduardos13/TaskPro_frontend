import { createSlice } from '@reduxjs/toolkit';
import {
  createBoardThunk,
  deleteBoardThunk,
  getAllBoardsThunk,
} from './operations.js';

const initialState = {
  boards: [],
  isLoading: false,
  isError: false,
  // board: {
  //   _id: '',
  //   title: '',
  //   background: '',
  //   icon: '',
  //   ownur: '',
  //   columns: [],
  // },
};

const slice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoardsThunk.fulfilled, (state, action) => {
        state.boards = action.payload ?? [];
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getAllBoardsThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllBoardsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(createBoardThunk.fulfilled, (state, action) => {
        if (action.payload && action.payload._id) {
          state.boards.unshift(action.payload);
        }
      })
      .addCase(deleteBoardThunk.fulfilled, (state, action) => {
        state.boards = state.boards.filter(
          (board) => board._id !== action.payload
        );
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(deleteBoardThunk.rejected, (action, payload) => {
        state.isLoading = false;
        isError = true;
      });
  },
});

export const boardReducer = slice.reducer;
