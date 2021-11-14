import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from "../types";

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_ASYNC:
      return state + action.payload;
    default:
      return state;
  }
};
