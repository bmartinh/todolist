import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentDate } from "../../actions/dateActions";
import moment from "moment";
import M from "materialize-css/dist/js/materialize.min.js";

const DateComponent = ({ currentDate, setCurrentDate }) => {
   const dateEl = useRef();

   const onSelect = (selectedDate) => {
      setCurrentDate(selectedDate);
   };

   useEffect(() => {
      M.Datepicker.init(dateEl.current, {
         onSelect: onSelect,
         defaultDate: currentDate,
         setDefaultDate: true
      });
   });

   const onClickLeft = () => {
      const instance = M.Datepicker.getInstance(dateEl.current);
      const date = moment(instance.toString());
      date.subtract(1, "days");
      setCurrentDate(date.toDate());
   };

   const onClickRight = () => {
      const instance = M.Datepicker.getInstance(dateEl.current);
      const date = moment(instance.toString());
      date.add(1, "days");
      setCurrentDate(date.toDate());
   };

   return (
      <div className='row'>
         <div className='col s1'>
            <a onClick={onClickLeft} className='waves-effect waves-light btn'>
               <i className='material-icons'>chevron_left</i>
            </a>
         </div>
         <div className='col s10'>
            <input
               id='datepicker'
               ref={dateEl}
               placeholder='Pick a date'
               type='text'
               className='no-autoinit'
               style={{ fontSize: "bold", textAlign: "center" }}
            />
         </div>
         <div className='col s1'>
            <a onClick={onClickRight} className='waves-effect waves-light btn'>
               <i className='material-icons'>chevron_right</i>
            </a>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      currentDate: state.date.currentDate
   };
};
export default connect(mapStateToProps, { setCurrentDate })(DateComponent);
