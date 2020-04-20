import React, { useEffect, useState } from "react";
import config from "config";

const GoogleAuth = () => {
   const [auth, setAuth] = useState(null);

   const onAuthChange = (isSignedIn) => {
      if (isSignedIn) console.log("sign out");
      else {
         console.log("sign in");
      }
   };

   useEffect(() => {
      const clientID = config.get("oAuth_ClientID");

      window.gapi.load("client:auth2", () => {
         window.gapi.client
            .init({
               client_id: clientID,
               scope: "email"
            })
            .then(() => {
               setAuth(window.gapi.auth2.getAuthInstance());
               onAuthChange(auth.isSignedIn.get());
               auth.isSignedIn.listen(this.onAuthChange);
            });
      });
   });

   return <div></div>;
};

export default GoogleAuth;
