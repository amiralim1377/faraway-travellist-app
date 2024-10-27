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
      console.log(theUpdateValue);

      if (theUpdateValue) {
        theUpdateValue.checked = !theUpdateValue.checked;
      }
    },
  },
});

export const { addremember, deleteremember, updateremember } =
  rememberSlice.actions;

export default rememberSlice.reducer;
