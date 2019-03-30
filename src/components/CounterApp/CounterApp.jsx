import React from "react";
import {
  increment,
  decrement
} from "../../containers/CounterApp/ActionCreators";

export const CounterApp = ({ store }) => {
  console.log(store.getState());
  return (
    <div className="counter-app">
      <h1>{store.getState().value}</h1>
      <button onClick={() => store.dispatch(decrement(2))}>-</button>
      <button onClick={() => store.dispatch(increment(2))}>+</button>
    </div>
  );
};
