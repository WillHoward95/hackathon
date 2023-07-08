import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const Input = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  const handleTodoText = (e) => {
    const { value } = e.target;
    console.log(value);
    setTodoTitle(value);
  };

  const handleAddTodo = (e) => {
    // const { value } = e.target.value;
    // const todo = value;

    dispatch(addTodo(todoTitle));
    setTodoTitle("");
  };
  return (
    <>
      <input
        style={{ width: "500px" }}
        type="text"
        value={todoTitle}
        onChange={handleTodoText}
      />
      <button style={{ width: "500px" }} onClick={handleAddTodo}>
        Add Todos
      </button>
    </>
  );
};

export default Input;
