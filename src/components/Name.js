import React from "react";
import { useDispatch } from "react-redux";

function Name() {
  const dispatch = useDispatch();

  function handleUpdateName(event) {
    dispatch({
      type: "UPDATE_NAME",
      payload: event.target.value
    });
  }
  function handleUpdateNameWithFLEX(event) {
    dispatch({
      type: "UPDATE_NAME_WITH_FLEX",
      payload: event.target.value + " 💪 FLEXXXXX"
    });
  }

  return (
    <div>
      <input placeholder="Input your name" onChange={handleUpdateName} />
      <input
        placeholder="Input your name with flex"
        onChange={handleUpdateNameWithFLEX}
      />
    </div>
  );
}

export default Name;
