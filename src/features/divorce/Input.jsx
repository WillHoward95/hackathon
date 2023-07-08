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
    if (todoTitle === "") {
      return;
    }
    dispatch(addTodo(todoTitle));
    setTodoTitle("");
  };

  return (
    <div className="w-80  d-flex justify-content-center flex-wrap my-4">
      <input
        className="w-60 to-do-input"
        type="text"
        value={todoTitle}
        onChange={handleTodoText}
      />
      <button className="btn btn-primary w-" onClick={handleAddTodo}>
        Add Todos
      </button>
    </div>
  );
};

export default Input;
