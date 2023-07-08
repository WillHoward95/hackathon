import {
  setNewDate,
  selectDateArray,
  newDateInput,
  selectDateInput,
  setNewDateTitle,
  selectNewDateTitle,
  setCurrentDate,
} from "./divorceSlice";
import { useSelector, useDispatch } from "react-redux";
import Occasion from "./Occasion";
import "./Counters.css";

const Counters = () => {
  const dispatch = useDispatch();

  const dateArray = useSelector(selectDateArray);
  const newDateString = useSelector(selectDateInput);
  const newDateTitle = useSelector(selectNewDateTitle);

  setInterval(() => {
    dispatch(setCurrentDate(Date.now()));
  }, 1000);

  console.log(newDateString, "HERE");

  let ocassionRecords = dateArray.map((record, index) => {
    return <Occasion newDateString={newDateString} record={record} />;
  });

  return (
    <>
      <div className="form-container">
        <form>
          <input
            type="date"
            onChange={(e) => {
              console.log(e.target.value);
              dispatch(newDateInput(e.target.value));
            }}
            min="2023-01-01"
            max="2023-12-31"
            value={newDateString}
          ></input>
          <input
            type="text"
            onInput={(e) => {
              dispatch(setNewDateTitle(e.target.value));
            }}
            value={newDateTitle}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (newDateString && newDateTitle) {
                dispatch(
                  setNewDate({ UTC: newDateString, title: newDateTitle })
                );
              }
              dispatch(setNewDateTitle(""));
            }}
          >
            Add Date
          </button>
        </form>
        <div className="counter-container">
          <div className="counter-list-headers">
            <div className="Title"></div>
            <div className="Date"></div>
            <div className="Countdown"></div>
          </div>
          <div className="counter-list">{ocassionRecords}</div>
        </div>
      </div>
    </>
  );
};

export default Counters;
