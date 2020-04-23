import React from "react";
import PropTypes from "prop-types";
import GoogleAuth from "../auth/GoogleAuth";

const Navbar = ({ title }) => {
   return (
      <nav>
         <div className='nav-wrapper blue darken-3'>
            <a href='#!' className='brand-logo'>
               <i className='material-icons'>view_list</i>
               {title}
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
               <GoogleAuth />
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
