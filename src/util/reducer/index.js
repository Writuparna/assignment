import { combineReducers } from "redux";
import userReducer from "./users";
import blogReducer from "./blogs";

const rootReducer = combineReducers({ userReducer, blogReducer });

export default rootReducer;
