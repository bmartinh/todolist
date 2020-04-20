import {
   LOGIN_USER,
   LOGOUT_USER,
   REGISTER_USER,
   USER_ERROR,
   SET_LOADING
} from "./types";
import axios from "axios";

//Log in user
export const loginUser = () => {};

//Log out user
export const logOut = () => {};

//Register user
export const registerUser = ({ user }) => {};

//Set Loading
export const setLoading = () => {
   return {
      type: SET_LOADING
   };
};
