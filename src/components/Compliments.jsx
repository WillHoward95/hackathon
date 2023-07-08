import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./compliments.css";

import {
  setCompliment,
  selectCompliment,
} from "../features/compliments/complimentsSlice";

const Compliments = () => {
  const dispatch = useDispatch();
  const compliment = useSelector(selectCompliment);

  const getCompliment = async () => {
    const complimentURL = "https://complimentr.com/api";
    try {
      const { data } = await axios.get(complimentURL);
      dispatch(setCompliment(data.compliment));
    } catch (error) {
      console.log(error);
    }
  };

  const onComplimentClick = () => {
    getCompliment();
  };

  return (
    <>
      <div class="container text-center">
        <div class="row">
          <h2 className="col mt-5">Generate a compliment for your partner </h2>
          <p>
            {" "}
            Research shows that showing appreciation to your partner increases
            happiness in couples, so remember to say something nice!
          </p>

          <div className="tooltip-wrap">
            <div className="tooltip-content">
              Click here to generate a new unique compliment for your
              significant other
            </div>
            <button className="btn btn-primary" onClick={onComplimentClick}>
              Generate a unique compliment
            </button>
          </div>

          <h3
            className={`col mb-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded`}
          >
            {" "}
            {compliment}{" "}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Compliments;
