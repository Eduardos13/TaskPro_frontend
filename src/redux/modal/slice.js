import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: () => {
      state.isOpen = false;
    },
  },
});

export const modalReducer = slice.reducer;
export const { toggleModal, openModal, closeModal } = slice.actions;
