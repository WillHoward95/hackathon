import React from "react";
import Counters from "./features/divorce/Counters";
import Compliments from "./components/Compliments";
import TodoContainer from "./features/divorce/TodoContainer";
import Email from "./components/Email";
import "./App.css";
import Image from "./assets/Image20230708180048.png";

const App = () => {
  return (
    <>
      {/* <h1 className="siteTitle">Marriage Saver</h1> */}
      <img src={Image} className="logo"></img>
      <Counters />
      <Compliments />
      <TodoContainer />
      <Email />
    </>
  );
};

export default App;
