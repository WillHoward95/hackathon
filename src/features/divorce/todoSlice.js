import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  deletedTodos: {},
  completedTodo: {},
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        title: action.payload,
        complete: false,
      };
      const updatedTodos = [...state.todos, todo];
      state.todos = updatedTodos;
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(todoIndex, 1);
    },

    toggleComplete: (state, action) => {
      const indexOfCompleted = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      const toggleCompleted = {
        ...state.todos[indexOfCompleted],
        complete: !state.todos[indexOfCompleted].complete,
      };
      state.todos[indexOfCompleted] = toggleCompleted;
    },
  },
});

export const { getTodos, addTodo, deleteTodo, toggleComplete } =
  todosSlice.actions;

export const selectTodos = (state) => state.todos.todos;
// export const selectDeleteTodo = (state) => state.todos.deletedTodos;

export default todosSlice.reducer;
