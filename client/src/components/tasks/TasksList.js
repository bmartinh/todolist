import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTasks } from "../../actions/taskActions";
import PropTypes from "prop-types";

import Preloader from "../layout/Preloader";
import TaskItem from "./TaskItem";

const TasksList = ({
   task: { tasks, loading },
   userID,
   currentDate,
   getTasks
}) => {
   useEffect(() => {
      if (userID && currentDate) getTasks(userID, currentDate);
      //eslint-disable-next-line
   }, [userID, currentDate]);

   if (loading) return <Preloader />;

   if (tasks === null) return <div>No tasks</div>;

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
   task: state.task,
   userID: state.auth.userID,
   currentDate: state.date.currentDate
});

export default connect(mapStateToProps, { getTasks })(TasksList);
