import { rootReducer } from "../reducers/rootReducer";
import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(logger, thunk, promise));
export const store = createStore(rootReducer, {}, enhancer);
