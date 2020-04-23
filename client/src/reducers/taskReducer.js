import {
   GET_TASKS,
   ADD_TASK,
   UPDATE_TASK,
   TASK_ERROR,
   SET_LOADING,
   CLEAR_TASKS,
   DELETE_TASK
} from "../actions/types";

const initialState = {
   tasks: null,
   loading: false,
   error: null
};

export default (state = initialState, action) => {
   switch (action.type) {
      case GET_TASKS:
         return {
            ...state,
            tasks: action.payload,
            loading: false
         };
      case ADD_TASK:
         return {
            ...state,
            tasks: [...state.tasks, action.payload],
            loading: false
         };
      case UPDATE_TASK:
         return {
            ...state,
            tasks: state.tasks.map((task) =>
               task._id === action.payload._id ? action.payload : task
            ),
            loading: false
         };
      case DELETE_TASK:
         return {
            ...state,
            tasks: state.tasks.filter((task) => task._id !== action.payload),
            loading: false
         };
      case CLEAR_TASKS:
         return {
            ...state,
            tasks: null,
            loading: false
         };
      case SET_LOADING:
         return {
            ...state,
            loading: true
         };
      case TASK_ERROR:
         console.log(action.payload);
         return {
            ...state,
            error: action.payload,
            loading: false
         };
      default:
         return state;
   }
};
