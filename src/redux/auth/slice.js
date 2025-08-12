import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerThunk } from './operations.js';

const initialState = {
  user: {
    _id: '',
    name: '',
    email: '',
    theme: 'light',
    avatar: '',
  },
  accessToken: '',
  isLoading: false,
  isError: false,
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        // state.isError = false;
        // state.isLoading = false;
        return initialState;
      })
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, action) => {
          state.accessToken = action.payload.data.accessToken;
          state.isError = false;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending),
        (state, action) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, registerThunk.rejected),
        (state, action) => {
          state.isError = true;
          state.isLoading = false;
        }
      );
  },
});

export const authReducer = slice.reducer;
