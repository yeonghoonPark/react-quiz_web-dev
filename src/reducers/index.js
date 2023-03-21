import { combineReducers } from "redux";
import counter from "./counter";
import login from "./login";
import record from "./record";

const rootReducer = combineReducers({
  counter,
  login,
  record,
});

export default rootReducer;
