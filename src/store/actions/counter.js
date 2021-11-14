import { INCREMENT, DECREMENT, INCREMENT_ASYNC, INCREMENT_ASYNC_REQUEST } from "../types";

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function incrementAsync(value) {
  return {
    type: INCREMENT_ASYNC_REQUEST,
    payload: value,
  };
}
