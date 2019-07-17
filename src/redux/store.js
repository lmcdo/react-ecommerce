// Dependencias
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Reducers
import rootReducer from "./rootReducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
