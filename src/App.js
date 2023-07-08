import React from "react";
import Counters from "./features/divorce/Counters";
import Compliments from "./components/Compliments";
import TodoContainer from "./features/divorce/TodoContainer";

const App = () => {
  return (
    <>
      <Counters />
      <Compliments />
      <TodoContainer />
    </>
  );
};

export default App;
