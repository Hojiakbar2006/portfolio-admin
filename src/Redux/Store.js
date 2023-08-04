import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reAlert } from "./Alert";

const reducer = combineReducers({
  alert: reAlert,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
