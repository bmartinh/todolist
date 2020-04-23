import { combineReducers } from "redux";
import userReducer from "./userReducer";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import dateReducer from "./dateReducer";

export default combineReducers({
   user: userReducer,
   task: taskReducer,
   auth: authReducer,
   date: dateReducer
});
