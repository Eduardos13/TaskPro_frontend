import { createSlice } from '@reduxjs/toolkit';
import { createBoardThunk } from './operations.js';

const initialState = {
  board: {
    _id: '',
    title: '',
    background: '',
    icon: '',
    ownur: '',
    columns: [],
  },
};

const slice = createSlice({
  name: 'board',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createBoardThunk.fulfilled, (state, action) => {
      state.board = action.payload;
    });
  },
});

export const boardReducer = slice.reducer;
