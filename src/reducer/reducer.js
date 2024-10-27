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
  },
});

export const { addremember, deleteremember } = rememberSlice.actions;

export default rememberSlice.reducer;
