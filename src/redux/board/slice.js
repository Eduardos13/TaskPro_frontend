import { createSlice } from '@reduxjs/toolkit';
import { createBoardThunk, getAllBoardsThunk } from './operations.js';

const initialState = {
  boards: [],
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
      })
      .addCase(createBoardThunk.fulfilled, (state, action) => {
        if (action.payload) state.boards.unshift(payload);
      });
  },
});

export const boardReducer = slice.reducer;
