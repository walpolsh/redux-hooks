import { appplyMiddleware, createStore, applyMiddleware } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return { ...state, fetching: true };
    }
    case "FETCH_USERS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "RECEIVE_USERS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    }
    default:
      return state;
  }
};
const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  dispatch({ type: "FETCH_USERS_START" });
  axios
    .get("http://rest.learncode.academy/api/wstern/users")
    .then(res => {
      dispatch({ type: "RECEIVE_USERS", payload: res.data });
    })
    .catch(error => {
      dispatch({ type: "FETCH_USERS_ERROR", payload: error });
    });
});
