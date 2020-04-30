import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateTask, deleteTask } from "../../actions/taskActions";

const TaskItem = ({ task, updateTask, deleteTask }) => {
   const textClass = task.completed ? "line-through" : "";
   const onChange = (e) => {
      if (e.target.checked) {
         const newTask = { ...task, completed: true };
         updateTask(newTask);
      } else {
         const newTask = { ...task, completed: false };
         updateTask(newTask);
      }
   };

   const onDelete = () => {
      deleteTask(task._id);
   };

   return (
      <li className='collection-item list-item'>
         <label>
            <input
               onChange={onChange}
               type='checkbox'
               className='filled-in'
               value={task.completed}
               checked={task.completed}
            />

            <span
               className='taskitem_text'
               style={{ textDecoration: textClass }}
            >
               {task.name}
            </span>
            <a href='#!' className='secondary-content' onClick={onDelete}>
               <i className='material-icons grey-text'>delete</i>
            </a>
         </label>
      </li>
   );
};

TaskItem.propTypes = {
   task: PropTypes.object.isRequired,
   updateTask: PropTypes.func.isRequired,
   deleteTask: PropTypes.func.isRequired
};

export default connect(null, { updateTask, deleteTask })(TaskItem);
