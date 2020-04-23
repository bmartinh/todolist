import { SET_CURRENT_DATE } from "../actions/types";
import moment from "moment";

const initialState = {
   currentDate: moment().toDate()
};

export default (state = initialState, action) => {
   switch (action.type) {
      case SET_CURRENT_DATE:
         return {
            ...state,
            currentDate: action.payload
         };

      default:
         return state;
   }
};
