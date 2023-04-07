import React, { useState } from "react";
import "./State.css";

const State = () => {
  const [counter, setCounter] = useState(0);

  const increamentClick = () => {
    setCounter(counter + 1);
  };
  const decreamentClick = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="counter">
      <h1 className="count">{counter}</h1>
      <div className="buttons">
        <button onClick={increamentClick}>Increament</button>
        <button onClick={decreamentClick}>Decreament</button>
      </div>
    </div>
  );
};

export default State;
