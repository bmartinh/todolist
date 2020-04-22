import React from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "../../actions/authActions";
import { clearTasks } from "../../actions/taskActions";

class GoogleAuth extends React.Component {
   onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
         this.props.logIn(this.auth.currentUser.get().getId());
      } else {
         this.props.logOut();
         this.props.clearTasks();
      }
   };

   componentDidMount() {
      window.gapi.load("client:auth2", () => {
         window.gapi.client
            .init({
               client_id:
                  "485280573414-3uottb9pc7lk1q3cggqcv7sr4ln551ic.apps.googleusercontent.com",
               scope: "email"
            })
            .then(() => {
               this.auth = window.gapi.auth2.getAuthInstance();
               this.onAuthChange(this.auth.isSignedIn.get());
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
      });
   }

   onSignInClick = () => {
      this.auth.signIn();
   };
   onSignOutClick = () => {
      this.auth.signOut();
   };
   renderAuthButton() {
      if (this.props.isSignedIn === null) return null;
      else if (this.props.isSignedIn) {
         return (
            <a className='red' onClick={this.onSignOutClick} href='#!'>
               <i className='google icon' />
               Sign Out
            </a>
         );
      } else {
         return (
            <a className='red' onClick={this.onSignInClick} href='#!'>
               <i className='google icon' />
               Sign In with Google
            </a>
         );
      }
   }
   render() {
      return <div>{this.renderAuthButton()}</div>;
   }
}

const mapStateToProps = (state) => {
   return {
      isSignedIn: state.auth.isSignedIn
   };
};

export default connect(mapStateToProps, {
   logIn,
   logOut,
   clearTasks
})(GoogleAuth);
