import { combineReducers } from "redux";
import userReducers from "./Users/userReducers";

export default combineReducers({
  user: userReducers,
});
