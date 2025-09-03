import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddOpen: false,
  isEditOpen: false,
  isDeleteOpen: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    openAddModal: (state, action) => {
      state.isAddOpen = true;
    },
    openEditModal: (state, action) => {
      state.isEditOpen = true;
    },
    openDeleteModal: (state, action) => {
      state.isDeleteOpen = true;
    },
    closeModal: (state, action) => {
      return initialState;
    },
  },
});

export const modalReducer = slice.reducer;
export const {
  toggleModal,
  openAddModal,
  openEditModal,
  openDeleteModal,
  closeModal,
} = slice.actions;
