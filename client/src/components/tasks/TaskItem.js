import React from "react";
import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
   return <li className='collection-item'>{task.name}</li>;
};

TaskItem.propTypes = {
   task: PropTypes.object.isRequired
};
export default TaskItem;
