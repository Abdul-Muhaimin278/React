//* useState Challenge Description:
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

//? Reset Button: Add a button to reset the count to zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step Increment: Add an input field to allow users to set the step value by which the counter should increment or decrement.

import { useState } from "react";
import "../hooks.css";

const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState('');

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep('');
  };

  return (
    <section className="d-flex justify-content-center align-items-end">
      <div className="state-container py-2 px-3">
        <h1 className="text-center">useState Challenge</h1>

        <p className="">
          Count: <span> {count} </span>
        </p>

        <div>
          <label className="mb-5">
            Step:
            <input
              type="number"
              // maxLength="3"
              // max="100"
              // min="0"
              // value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="grid-three-cols ">
          <button className=" button" onClick={handleIncrement} disabled={count >= 1000}>
            Increment
          </button>
          <button className=" button" onClick={handleDecrement} disabled={count <= 0}>
            Decrement
          </button>
          <button className=" button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default CounterChallenge;