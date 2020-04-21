import {
   LOGIN_USER,
   LOGOUT_USER,
   AUTH_ERROR,
   SET_AUTH_INSTANCE,
   SET_LOADING
} from "./types";

//Log in user
// export const logIn = () => (dispatch, getState) => {
//    try {
//       console.log(getState());
//       const auth = getState().auth.instance;

//       auth.signIn();
//       const userID = auth.currentUser.get().getId();

//       dispatch({
//          type: LOGIN_USER,
//          payload: userID
//       });
//    } catch (error) {
//       dispatch({
//          type: AUTH_ERROR,
//          payload: error
//       });
//    }
// };

export const logIn = (userID) => {
   return {
      type: LOGIN_USER,
      payload: userID
   };
};

//Log out user
// export const logOut = () => (dispatch, getState) => {
//    try {
//       const auth = getState().auth.instance;
//       auth.signOut();

//       dispatch({
//          type: LOGOUT_USER
//       });
//    } catch (error) {
//       dispatch({
//          type: AUTH_ERROR,
//          payload: error
//       });
//    }
// };

export const logOut = () => {
   return {
      type: LOGOUT_USER
   };
};

//Register user
export const setAuthInstance = (auth) => {
   return {
      type: SET_AUTH_INSTANCE,
      payload: auth
   };
};

//Set Loading
export const setLoading = () => {
   return {
      type: SET_LOADING
   };
};
