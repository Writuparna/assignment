import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducer";

const middlewares = [ReduxThunk, logger];
const Store = createStore(rootReducer, applyMiddleware(...middlewares));

export default Store;
