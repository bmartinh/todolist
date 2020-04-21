import { combineReducers } from "redux";
import userReducer from "./userReducer";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";

export default combineReducers({
   user: userReducer,
   task: taskReducer,
   auth: authReducer
});
