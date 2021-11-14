import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions/counter';

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <p>Clicked: {counter} times</p>
      <div>
        <button onClick={() => dispatch(actions.decrement())}>-</button>{" "}
        <button onClick={() => dispatch(actions.increment())}>+</button>
      </div>
      <button onClick={() => dispatch(actions.incrementAsync(10))}>+</button>
    </>
  );
};

export default Counter;
