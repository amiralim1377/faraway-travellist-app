import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: "",
  number: "",
};

const rememberSlice = createSlice({
  name: "remember",
  initialState,
  reducers: {
    descitem(state, action) {
      state.item = action.payload;
    },
    numberitem(state, action) {
      state.number = action.payload;
    },
  },
});

console.log(rememberSlice);

export const { descitem, numberitem } = rememberSlice.actions;

export default rememberSlice.reducer;
