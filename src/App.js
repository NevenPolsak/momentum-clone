import React from "react";
import Wheater from "./components/Wheater";
import Time from "./components/Time"
import DateToday from "./components/DateToday"
import Quote from "./components/Quote"

function App() {
  return (
    <div>
      <Wheater/>
      <Time/>
      <DateToday/>
      <Quote/>
    </div>
  );
}

export default App;
