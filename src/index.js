import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { CounterApp } from "./containers/CounterApp/CounterApp";
import * as serviceWorker from "./serviceWorker";
import { counterReducer } from "./containers/CounterApp/reducers/counterReducer";

const store = createStore(counterReducer);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
