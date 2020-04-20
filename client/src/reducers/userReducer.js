import {
   LOGIN_USER,
   LOGOUT_USER,
   REGISTER_USER,
   USER_ERROR,
   SET_LOADING
} from "../actions/types";

const initialState = {
   user: null,
   loading: false,
   error: null
};

export default (state = initialState, action) => {
   switch (action.type) {
      case SET_LOADING:
         return {
            ...state,
            loading: true
         };
      case LOGIN_USER:
      case REGISTER_USER:
         return {
            ...state,
            user: action.payload,
            loading: false
         };
      case LOGOUT_USER:
         return {
            ...state,
            user: null,
            loading: false
         };
      case USER_ERROR:
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
