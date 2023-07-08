import { configureStore } from "@reduxjs/toolkit";
import divorceReducer from "../features/divorce/divorceSlice";
import todosReducer from "../features/divorce/todoSlice";
import complimentsReducer from "../features/compliments/complimentsSlice";

export const store = configureStore({
  reducer: {
    divorce: divorceReducer,
    todos: todosReducer,
    compliments: complimentsReducer,
  },
});
