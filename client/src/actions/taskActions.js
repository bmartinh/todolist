import axios from "axios";
import { GET_TASKS, ADD_TASK, TASK_ERROR, SET_LOADING } from "./types";

//Get tasks from server
export const getTasks = () => async (dispatch) => {
   try {
      setLoading();

      const res = await axios.get("/api/tasks");

      dispatch({
         type: GET_TASKS,
         payload: res.data
      });
   } catch (error) {
      dispatch({
         type: TASK_ERROR,
         payload: error.response.statusText
      });
   }
};

//Add new task to database
export const addTask = (task) => async (dispatch) => {
   try {
      const res = await axios.post("api/tasks", task, {
         headers: {
            "Content-Type": "application/json"
         }
      });
      console.log(res);
      dispatch({
         type: ADD_TASK,
         payload: res.data
      });
   } catch (error) {
      console.log(error);
      dispatch({
         type: TASK_ERROR,
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
