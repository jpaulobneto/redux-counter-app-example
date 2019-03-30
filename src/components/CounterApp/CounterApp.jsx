import React from "react";

export const CounterApp = ({ value = 0, onIncrementClick, onDecrementClick }) => {
  return (
    <div className="counter-app">
      <h1>{value}</h1>
      <button onClick={onIncrementClick}>+</button>
      <button onClick={onDecrementClick}>-</button>
    </div>
  );
};