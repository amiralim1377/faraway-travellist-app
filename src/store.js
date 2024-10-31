import { configureStore } from "@reduxjs/toolkit";
import rememerReducer from "./reducer/reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfing = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  remember: rememerReducer,
});

const persistedReducer = persistReducer(persistConfing, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
