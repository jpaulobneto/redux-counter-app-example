import React from "react";
import { INCREMENT, DECREMENT } from "../../containers/CounterApp/ActionTypes";

export const CounterApp = ({ store }) => {
  console.log(store.getState());
  return (
    <div className="counter-app">
      <h1>{store.getState().value}</h1>
      <button onClick={() => store.dispatch({ type: DECREMENT })}>-</button>
      <button onClick={() => store.dispatch({ type: INCREMENT })}>+</button>
    </div>
  );
};
