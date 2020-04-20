import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTasks } from "../../actions/taskActions";
import PropTypes from "prop-types";

import Preloader from "../layout/Preloader";
import TaskItem from "./TaskItem";

const TasksList = ({ task: { tasks, loading }, getTasks }) => {
   useEffect(() => {
      getTasks();

      //eslint-disable-next-line
   }, []);

   if (tasks === null || loading) return <Preloader />;

   return (
      <ul className='collection'>
         {tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
         ))}
      </ul>
   );
};

TasksList.propTypes = {
   getTasks: PropTypes.func.isRequired,
   task: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
   task: state.task
});

export default connect(mapStateToProps, { getTasks })(TasksList);
