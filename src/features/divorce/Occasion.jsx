import "./Ocassion.css";
import { selectCurrentDate } from "./divorceSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteOcassion } from "./divorceSlice";

const Occasion = (props) => {
  const { record } = props;
  const dispatch = useDispatch();

  const currentDate = useSelector(selectCurrentDate);
  const dateUTC = Date.parse(record.UTC);

  let dateDifference = dateUTC - currentDate;

  let modifiedDifference = dateDifference;

  if (dateDifference < 0) {
    modifiedDifference += 365 * 24 * 60 * 60 * 1000;
  }

  if (dateDifference === 0) {
    //email function
  }

  const months = Math.floor(modifiedDifference / (1000 * 60 * 60 * 24 * 30.44));
  // const days = Math.floor(modifiedDifference / (1000 * 60 * 60 * 24));
  const date = new Date(modifiedDifference);
  const days = date.getUTCDate();
  const hours = Math.floor(
    (modifiedDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1
  );
  const mins = Math.floor(
    (modifiedDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secs = Math.floor((modifiedDifference % (1000 * 60)) / 1000);

  return (
    <div className="occasion-record">
      <div className="top-banner">
        <div className="record-header">
          <h1 className="ocassion-title">{record.title}</h1>
        </div>
        <div className="finish-date">
          <small>{record.UTC}</small>
        </div>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={() => {
            dispatch(deleteOcassion(record.id));
          }}
        ></button>
      </div>
      <div className="countdown">
        <small>
          {months} months, {days} days, {hours} hours, {mins} minutes, {secs}{" "}
          seconds
        </small>
      </div>
    </div>
  );
};

export default Occasion;
