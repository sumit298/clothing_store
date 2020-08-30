import { combineReducers } from "redux";
import userReducers from "./Users/userReducers";
import cartReducers from "./Cart/cartReducer";

export default combineReducers({
  user: userReducers,
  cart: cartReducers,
});
