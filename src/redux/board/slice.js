import { createSlice } from '@reduxjs/toolkit';
import { createBoard } from './operations.js';

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
    builder.addCase(getAllBoards.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(createBoard.fulfilled, (state, action) => {
      state.board = action.payload;
    });
  },
});

export const boardReducer = slice.reducer;
