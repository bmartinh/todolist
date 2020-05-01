import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, getTasks } from "../../actions/taskActions";
import PropTypes from "prop-types";

import M from "materialize-css/dist/js/materialize.min.js";

const Taskbar = ({ userID, currentDate, isSignedIn, addTask, getTasks }) => {
   const [name, setName] = useState("");

   const onClick = () => {
      if (name === "") {
         M.toast({ html: "Please enter a name for the task" });
      } else if (!isSignedIn) {
         M.toast({ html: "Please sign in with your Google Account first" });
      } else {
         const task = {
            name,
            user: userID,
            date: currentDate
         };

         addTask(task);
         // getTasks(userID, currentDate);
         M.toast({ html: "Task added" });
         setName("");
      }
   };

   return (
      <form>
         <div className='row'>
            <div className='input-field col s9 offset-s1'>
               <input
                  placeholder='What do we do today?'
                  autoComplete='off'
                  maxLength='50'
                  data-length='50'
                  id='task-bar'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div className='col s2'>
               <a
                  onClick={onClick}
                  className='btn-floating btn-large waves-effect waves-green teal lighten-1 pulse'
                  href='#!'
               >
                  <i className='material-icons center'>add</i>
               </a>
            </div>
         </div>
      </form>
   );
};

Taskbar.propTypes = {
   addTask: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      isSignedIn: state.auth.isSignedIn,
      userID: state.auth.userID,
      currentDate: state.date.currentDate
   };
};

export default connect(mapStateToProps, { addTask, getTasks })(Taskbar);
