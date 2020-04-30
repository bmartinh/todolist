import React, { useEffect, Fragment } from "react";
//import "./App.css";
import "./scss/App.scss";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Taskbar from "./components/layout/Taskbar";
import TaskList from "./components/tasks/TasksList";
import DateComponent from "./components/date/DateComponent";

const App = () => {
   useEffect(() => {
      // Init Materialize JS
      M.AutoInit();
      let sidenav = document.querySelector(".button-collapse");
      M.Sidenav.init(sidenav, {});
   });

   return (
      <Provider store={store}>
         <Fragment>
            {/* <Router> */}
            <Fragment>
               <Navbar />

               <div className='container'>
                  <div style={{ marginTop: "10px" }}></div>
                  <DateComponent />
                  <Taskbar />
                  <TaskList />
               </div>
            </Fragment>
         </Fragment>
      </Provider>
   );
};

export default App;
