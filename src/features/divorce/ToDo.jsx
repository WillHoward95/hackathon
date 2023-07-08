import { toggleComplete } from "./todoSlice";
import "./Counters.css";

import { useDispatch } from "react-redux";

const ToDo = ({ todo, handleDeleteItem }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  const { title, complete } = todo;

  console.log(complete);
  return (
    <>
      <li className="d-flex flex-row my-4 justify-content-between border-bottom border-1">
        <h3
          className={complete ? "text-decoration-line-through" : "text-primary"}
          onClick={handleToggleComplete}
        >
          {title}
        </h3>

        <button
          type="button"
          className="pe-auto btn-close"
          disabled
          aria-label="Close"
          onClick={handleDeleteItem}
        ></button>
      </li>
    </>
  );
};

export default ToDo;
