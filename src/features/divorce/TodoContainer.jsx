import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getTodos,
//   addTodo,
//   deleteTodo,
//   toggleComplete,
//   selectTodos,
// } from "./todoSlice";
import TodoList from "./TodoList";
import Input from "./Input";

const TodoContainer = () => {
  return (
    <section className=" d-flex flex-column align-items-center mw-100 todoContainer">
      <div className=" p-14 w-50 d-flex flex-column align-items-center   ">
        <div className="w-80 ">
          <h2>Never forget a special occasion again!</h2>
          <Input />
          <TodoList />
        </div>
      </div>
    </section>
  );
};

export default TodoContainer;
