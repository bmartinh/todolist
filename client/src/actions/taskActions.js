import axios from "axios";
import { GET_TASKS, ADD_TASK, TASK_ERROR, SET_LOADING } from "./types";

//Get tasks from server

//Add new task to database
export const addTask = ({ task }) => async (dispatch) => {
   try {
      const res = await axios.post("api/tasks", task);
      console.log(res);
      dispatch({
         type: ADD_TASK,
         payload: res.data
      });
   } catch (error) {
      dispatch({
         type: LOGS_ERROR,
         payload: error.response.statusText
      });
   }
};

//Set loading
export const setLoading = () => {
   return {
      type: SET_LOADING
   };
};
