import { toggleComplete } from "./todoSlice";

import { useDispatch } from "react-redux";

const ToDo = ({ todo, handleDeleteItem }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleComplete());
  };

  const { title, complete } = todo;

  console.log(complete);
  return (
    <>
      <li>
        <h2
          className={complete ? "complete" : "incomplete"}
          onClick={handleToggleComplete}
        >
          {title}
        </h2>

        <div onClick={handleDeleteItem}>X</div>
      </li>
    </>
  );
};

export default ToDo;
