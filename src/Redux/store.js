import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducer from "./Reducers";
const middleWare = [thunk];
const Store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default Store;
