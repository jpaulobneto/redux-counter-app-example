import { combineReducers } from "redux";
import { INCREMENT, DECREMENT } from "../ActionTypes";

const counter = (state = 0, action) => {
  const { payload } = action;

  switch (action.type) {
    case INCREMENT:
      return state + payload.step;
    case DECREMENT:
      return state - payload.step;
    default:
      return state;
  }
};

export const counterReducer = combineReducers({
  counter
});
