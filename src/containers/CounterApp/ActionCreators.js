import { INCREMENT, DECREMENT } from "./ActionTypes";

export const increment = step => ({ type: INCREMENT, payload: { step } });

export const decrement = step => ({ type: DECREMENT, payload: { step } });
