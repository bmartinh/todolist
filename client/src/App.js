import React, { useEffect, Fragment } from "react";
import "./App.css";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Taskbar from "./components/layout/Taskbar";

const App = () => {
   useEffect(() => {
      // Init Materialize JS
      M.AutoInit();
   });

   return (
      <Provider store={store}>
         <Fragment>
            {/* <Router> */}
            <Fragment>
               <Navbar />
               <div className='container'>
                  <Taskbar />
               </div>
               {/* <div className='container'>
                  <Switch>
                     <PrivateRoute exact path='/' component={Home} />
                     <Route exact path='/about' component={About} />
                     <Route exact path='/register' component={Register} />
                     <Route exact path='/login' component={Login} />
                  </Switch>
               </div> */}
            </Fragment>
            {/* </Router> */}
         </Fragment>
      </Provider>
   );
};

export default App;
