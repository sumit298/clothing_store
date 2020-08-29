import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
const middlewares = [logger];

const Store = createStore(rootReducer, applyMiddleware(...middlewares));

export default Store;
