import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../store";
import axios from "axios";

function Counter() {
  const { count, name, nameWithFlex, users, RANDOMusers } = useSelector(
    state => ({
      ...state.counterReducer,
      ...state.nameReducer,
      ...state.userReducer
    })
  );
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
  let peopleInSpace = users.data;
  let loadingDiv = <div>Loading...</div>;

  React.useEffect(() => {
    // store.dispatch({
    //   type: "FETCH_USERS",
    //   payload: axios.get("http://api.open-notify.org/astros.json")
    // });
    // store.dispatch({
    //   type: "FETCH_RANDOM_USERS",
    //   payload: axios.get("https://randomuser.me/api/?results=5")
    // });
  }, []);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={exponentCount}>EXPONENT_COUNT</button>
      <div>
        <h3>Your name is: {name}</h3>
        <h3>Your name is: {nameWithFlex}</h3>
        <h3>
          This many people are in SPACE RIGHT NOW:{" "}
          {peopleInSpace === undefined ? loadingDiv : peopleInSpace.number}
        </h3>
        <h3>These people are in SPACE RIGHT NOW: </h3>
        {peopleInSpace === undefined
          ? loadingDiv
          : peopleInSpace.people.map(x => (
              <li>
                name: {x.name}{" "}
                <ul>
                  <li>craft: {x.craft}</li>
                </ul>
              </li>
            ))}
        <h1>RANDOMusers</h1>
        {!RANDOMusers.data
          ? loadingDiv
          : RANDOMusers.data.results.map(user => (
              <div>
                <img alt="user" src={user.picture.large}></img>
                <h4>CELL: {user.cell}</h4>
                <h4>
                  DOB: {user.dob.date} AGE: {user.dob.age}
                </h4>
                <h4>EMAIL: {user.email}</h4>
                <h4>GENDER: {user.gender}</h4>
                <h4>LOCATION:</h4>
                <h4>CITY:{user.location.city}</h4>
                <h4>LATITUDE: {user.location.coordinates.latitude}</h4>
                <h4>LONGITUDE {user.location.coordinates.longitude}</h4>
                <h4>
                  NAME: {user.name.first} {user.name.last}
                </h4>
                <h4>EMAIL: {user.email}</h4>
              </div>
            ))}
      </div>
    </>
  );
}
export default Counter;
