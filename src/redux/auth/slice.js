import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './operations';

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
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = slice.reducer;
