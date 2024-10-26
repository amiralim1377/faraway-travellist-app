import { configureStore } from "@reduxjs/toolkit";
import rememerReducer from "./reducer/reducer";
const store = configureStore({
  reducer: {
    remember: rememerReducer,
  },
});

export default store;
