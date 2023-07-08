import {
  setNewDate,
  selectDateArray,
  newDateInput,
  selectDateInput,
  setNewDateTitle,
  selectNewDateTitle,
  setCurrentDate,
  selectCounter,
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

  let sortDateArray = [...dateArray];
  sortDateArray.sort((a, b) => {
    if (a.UTC < b.UTC) {
      return -1;
    }
    if (a.UTC > b.UTC) {
      return 1;
    }
  });

  let ocassionRecords = sortDateArray.map((record, index) => {
    return (
      <Occasion newDateString={newDateString} record={record} index={index} />
    );
  });

  const id = useSelector(selectCounter);

  return (
    <>
      <div className="form-container">
        <form>
          <h4>Select the date of your special day</h4>
          <input
            className="dateInput"
            type="date"
            onChange={(e) => {
              dispatch(newDateInput(e.target.value));
            }}
            min="2023-01-01"
            max="2023-12-31"
            value={newDateString}
          ></input>
          <h4>Input a title for the date</h4>
          <input
            className="form-control"
            type="text"
            onInput={(e) => {
              dispatch(setNewDateTitle(e.target.value));
            }}
            value={newDateTitle}
          ></input>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              if (newDateString && newDateTitle) {
                dispatch(
                  setNewDate({
                    UTC: newDateString,
                    title: newDateTitle,
                    id: id,
                  })
                );
              }
              dispatch(setNewDateTitle(""));
            }}
          >
            Add Date
          </button>
        </form>
        <div className="counter-list">{ocassionRecords}</div>
      </div>
    </>
  );
};

export default Counters;
