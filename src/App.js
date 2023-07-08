import React from "react";
import Counters from "./features/divorce/Counters";
import Compliments from "./components/Compliments";
import TodoContainer from "./src/features/divorce/TodoContainer";
import Email from "./src/components/Email";
import "./features/divorce/Counters.css";

const App = () => {
  return (
    <>
      <h1 className="">Marriage Saver</h1>
      <Counters />
      <Compliments />
      <TodoContainer />
      <Email />
    </>
  );
};

export default App;
