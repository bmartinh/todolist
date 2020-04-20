import { GET_TASKS, ADD_TASK, TASK_ERROR, SET_LOADING } from "../actions/types";

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
