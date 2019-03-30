import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CounterApp } from "./components/CounterApp/CounterApp";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { valueReducer } from "./containers/CounterApp/reducers/valueReducer";

const store = createStore(valueReducer);

const render = () => ReactDOM.render(<CounterApp store={store} />, document.getElementById("root")); 

store.subscribe(render);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
