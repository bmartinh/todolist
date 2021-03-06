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
      const date = moment(instance.toString(), "MMM DD,YYYY");
      date.subtract(1, "days");
      setCurrentDate(date.toDate());
   };

   const onClickRight = () => {
      const instance = M.Datepicker.getInstance(dateEl.current);
      const date = moment(instance.toString(), "MMM DD,YYYY");
      date.add(1, "days");
      setCurrentDate(date.toDate());
   };
   //moment('2010-01-01').isSame('2010-02-01', 'day');  comparing dates by day month and year
   return (
      <div className='row'>
         <div className='col s2 l3'>
            <a
               onClick={onClickLeft}
               className='waves-effect waves-light btn-flat right datepicker-btn-left'
               // className='waves-effect waves-light btn light-blue darken-3 right'
               href='#!'
            >
               {/* <i className='material-icons'>chevron_left</i> */}
               {"<"}
            </a>
         </div>
         <div className='col s8 l6'>
            <input
               id='datepicker'
               ref={dateEl}
               placeholder='Pick a date'
               type='text'
               className='no-autoinit'
               style={{ fontSize: "bold", textAlign: "center" }}
            />
         </div>
         <div className='col s2 l3'>
            {/* <a
               onClick={onClickRight}
               className='waves-effect waves-light light-blue darken-3 btn'
               href='#!'
            >
               <i className='material-icons'>chevron_right</i>
            </a> */}
            <a
               onClick={onClickRight}
               className='waves-effect waves-light btn-flat left datepicker-btn-right'
               href='#!'
            >
               {">"}
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
