import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateTask } from "../../actions/taskActions";

const TaskItem = ({ task, updateTask }) => {
   const textClass = task.completed ? "line-through" : "";
   const onChange = (e) => {
      if (e.target.checked) {
         const newTask = { ...task, completed: true };
         console.log("newTask", newTask);
         updateTask(newTask);
      } else {
         const newTask = { ...task, completed: false };
         console.log("newTask", newTask);
         updateTask(newTask);
      }
   };

   return (
      <li className='collection-item'>
         <label>
            <Fragment>
               <input
                  onChange={onChange}
                  type='checkbox'
                  className='filled-in'
                  value={task.completed}
                  checked={task.completed}
               />
               <span style={{ textDecoration: textClass }}>{task.name}</span>
            </Fragment>
         </label>
      </li>
   );
};

TaskItem.propTypes = {
   task: PropTypes.object.isRequired,
   updateTask: PropTypes.func.isRequired
};

export default connect(null, { updateTask })(TaskItem);
