import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const modalReducer = slice.reducer;
export const { toggleModal, openModal, closeModal } = slice.actions;
