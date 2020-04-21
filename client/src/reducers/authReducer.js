import {
   LOGIN_USER,
   LOGOUT_USER,
   SET_AUTH_INSTANCE,
   AUTH_ERROR,
   SET_LOADING
} from "../actions/types";

const initialState = {
   instance: null,
   isSignedIn: false,
   error: null,
   userID: null,
   loading: false
};

export default (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_INSTANCE:
         return {
            ...state,
            instance: action.payload,
            loading: false
         };
      case LOGIN_USER:
         return {
            ...state,
            isSignedIn: true,
            userID: action.payload,
            loading: false
         };
      case LOGOUT_USER:
         return {
            ...state,
            isSignedIn: false,
            userID: null,
            loading: false
         };
      case SET_LOADING:
         return {
            ...state,
            loading: true
         };
      case AUTH_ERROR:
         console.log(action.payload);
         return {
            ...state,
            error: action.payload
         };
      default:
         return state;
   }
};
