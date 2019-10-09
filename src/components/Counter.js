import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const { count, name, nameWithFlex } = useSelector(state => ({
    ...state.counterReducer,
    ...state.nameReducer
  }));
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch({
      type: "INCREMENT_COUNT"
    });
  }

  function decrementCount() {
    dispatch({
      type: "DECREMENT_COUNT"
    });
  }
  function exponentCount() {
    dispatch({
      type: "EXPONENT_COUNT"
    });
  }

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={exponentCount}>EXPONENT_COUNT</button>
      <div>
        <h3>Your name is: {name}</h3>
        <h3>Your name is: {nameWithFlex}</h3>
      </div>
    </>
  );
}
export default Counter;
