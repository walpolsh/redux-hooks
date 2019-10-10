import { combineReducers } from "redux";
import nameReducer from "./nameReducer";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  counterReducer,
  nameReducer,
  userReducer
});
