import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operations';

const initialState = {
  user: {
    _id: '',
    name: '',
    email: '',
    theme: 'light',
    avatar: '',
  },
  accessToken: '',
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = slice.reducer;
