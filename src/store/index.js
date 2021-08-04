import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data";

export const Store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export const dataActions = dataSlice.actions;
