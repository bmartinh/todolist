import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
   return (
      <nav>
         <div className='nav-wrapper blue darken-3'>
            <a href='#!' className='brand-logo'>
               <i className='material-icons'>view_list</i>
               {title}
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
               <li>
                  <a href='#!'>Login</a>
               </li>
               <li>
                  <a href='#!'>Register</a>
               </li>
            </ul>
         </div>
      </nav>
   );
};
Navbar.propTypes = {
   title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
   title: "Todo List"
};

export default Navbar;
