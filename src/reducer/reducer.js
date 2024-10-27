import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const rememberSlice = createSlice({
  name: "remember",
  initialState,
  reducers: {
    addremember(state, action) {
      state.push(action.payload);
    },
    deleteremember(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateremember(state, action) {
      const theUpdateValue = state.find((item) => item.id === action.payload);
      if (theUpdateValue) {
        theUpdateValue.checked = !theUpdateValue.checked;
      }
    },
    clearallremember(state) {
      return [];
    },
  },
});

export const { addremember, deleteremember, updateremember, clearallremember } =
  rememberSlice.actions;

export default rememberSlice.reducer;
