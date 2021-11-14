import { INCREMENT, DECREMENT } from "../types";

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
