import { useState } from "react";
import ToDo from "./ToDo";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, deleteTodo, toggleComplete } from "./todoSlice";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteTodo());
  };
  return (
    <>
      <div style={{ flexDirection: "column" }}>
        <ul>
          {todos.length === 0 ? (
            <p>Add your todos here</p>
          ) : (
            todos.map((todo) => (
              <ToDo
                key={todo.id}
                todo={todo}
                handleDeleteItem={handleDeleteItem}
                toggleComplete={toggleComplete}
              />
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
