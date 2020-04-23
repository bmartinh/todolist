import { SET_CURRENT_DATE } from "./types";

export const setCurrentDate = (date) => {
   return {
      type: SET_CURRENT_DATE,
      payload: date
   };
};
