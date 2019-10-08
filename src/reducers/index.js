import { createStore, combineReducers } from "redux";
import nameReducer from "./nameReducer";
import counterReducer from "./counterReducer";
export const rootReducer = combineReducers({
  counterReducer,
  nameReducer
});

export const store = createStore(rootReducer, {});
