import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_REQUEST,
} from "../types";

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

export function incrementRequest() {
  return {
    type: INCREMENT_ASYNC_REQUEST,
  };
}

export function incrementAsync(value) {
  return {
    type: INCREMENT_ASYNC,
    payload: value,
  };
}
