import React from "react";
import TodoList from "./TodoList";
import Input from "./Input";

const TodoContainer = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input />
      <TodoList />
    </section>
  );
};

export default TodoContainer;
