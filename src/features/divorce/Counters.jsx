import {
  setNewDate,
  selectDateArray,
  newDateInput,
  selectDateInput,
  setNewDateTitle,
  selectNewDateTitle,
} from "./divorceSlice";
import { useSelector, useDispatch } from "react-redux";

const Counters = () => {
  const dispatch = useDispatch();

  const dateArray = useSelector(selectDateArray);
  const newDateString = useSelector(selectDateInput);
  const newDateTitle = useSelector(selectNewDateTitle);

  const dateUTC = Date.parse(newDateString);
  const currentDate = Date.now();

  const dateDifference = dateUTC - currentDate;

  const months = Math.floor(dateDifference / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1
  );
  const mins = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((dateDifference % (1000 * 60)) / 1000);

  console.log(months, days, hours, mins, secs);

  return (
    <>
      <form>
        <input
          type="date"
          onChange={(e) => {
            dispatch(newDateInput(e.target.value));
          }}
        ></input>
        <input
          type="text"
          onInput={(e) => {
            dispatch(setNewDateTitle(e.target.value));
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (newDateString && newDateTitle) {
              dispatch(setNewDate({ UTC: newDateString, title: newDateTitle }));
            }
            dispatch(newDateInput(""));
            dispatch(setNewDateTitle(""));
          }}
        >
          Add Date
        </button>
      </form>
      {dateArray.map((item) => {
        return (
          <>
            <p>{item.title}</p>
            <p>{item.UTC}</p>
          </>
        );
      })}
    </>
  );
};

export default Counters;
