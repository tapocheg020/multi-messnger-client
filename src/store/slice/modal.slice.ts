import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isEditMode: boolean;
  isSearchMode: boolean;
}

const initialState: InitialState = {
  isEditMode: false,
  isSearchMode: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsEditMode: (state, action) => {
      state.isEditMode = action.payload;
    },
    setIsSearchMode: (state, action) => {
      state.isSearchMode = action.payload;
    },
  },
});

export default modalSlice.reducer;

export const { setIsEditMode, setIsSearchMode } = modalSlice.actions;
