import { configureStore } from "@reduxjs/toolkit";
import divorceReducer from "../features/divorce/divorceSlice";

export const store = configureStore({
  reducer: {
    divorce: divorceReducer,
  },
});
