import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import GoogleAuth from "../auth/GoogleAuth";
import M from "materialize-css/dist/js/materialize.min.js";

const Navbar = ({ title }) => {
   const sideNav = useRef();

   useEffect(() => {
      M.Sidenav.init(sideNav.current, {});
   });

   return (
      <div>
         <nav>
            <div className='nav-wrapper'>
               <div className='container'>
                  <a href='#!' className='brand-logo'>
                     {title}
                  </a>
                  <a
                     href='#'
                     data-target='mobile-demo'
                     className='sidenav-trigger'
                  >
                     <i className='material-icons'>menu</i>
                  </a>
                  <ul className='right hide-on-med-and-down'>
                     <GoogleAuth />
                  </ul>
               </div>
            </div>
         </nav>
         <ul ref={sideNav} className='sidenav custom-sidenav' id='mobile-demo'>
            <li>
               <GoogleAuth />
            </li>
         </ul>
      </div>
   );
};
Navbar.propTypes = {
   title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
   title: "aCComplish"
};

export default Navbar;
