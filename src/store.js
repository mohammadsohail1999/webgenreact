import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./Features/HeaderSlice";

export const store = configureStore({
  reducer: {
    header: HeaderSlice,
  },
});
