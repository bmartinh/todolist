import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/taskActions";
import PropTypes from "prop-types";

import M from "materialize-css/dist/js/materialize.min.js";

const Taskbar = ({ userID, isSignedIn, addTask }) => {
   const [name, setName] = useState("");
   const onClick = () => {
      if (name === "") M.toast({ html: "Please enter a name for the task" });
      else if (!isSignedIn) {
         M.toast({ html: "Please sign in with your Google Account first" });
      } else {
         const task = {
            name,
            user: userID
         };

         addTask(task);
         M.toast({ html: "Task added" });
         setName("");
      }
   };

   return (
      <form>
         <div className='row'>
            <div className='input-field col s10'>
               <input
                  placeholder='¿Qué quieres hacer hoy?'
                  id='task-bar'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div className='input-field col s2'>
               <a
                  onClick={onClick}
                  className='waves-effect waves-light btn'
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
      userID: state.auth.userID
   };
};

export default connect(mapStateToProps, { addTask })(Taskbar);
