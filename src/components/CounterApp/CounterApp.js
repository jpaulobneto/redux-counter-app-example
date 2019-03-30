import React from "react";

export const CounterApp = ({ value = 0, onDecrementClick, onIncrementClick }) => (
  <div className="counter-app">
    <h1>{value}</h1>
    <button onClick={onDecrementClick}>-</button>
    <button onClick={onIncrementClick}>+</button>
  </div>
);
