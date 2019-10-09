import { rootReducer } from "./reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const middlewares = [thunk];
export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middlewares)
);
