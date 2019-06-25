import { loginReducer } from "../reducers/login";
import { taskReducer } from "../reducers/tasks";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
  tasks: taskReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
