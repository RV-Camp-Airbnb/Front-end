import React from "react";
import { Route, Redirect } from "react-router-dom";
import OwnerProperties from "./OwnerProperties";

export default function OwnerPrivateRoute({ children, ...rest }) {

  const isAuthenticated = (props) => {
    console.log('Private: Get Id', localStorage.getItem("id"))
    console.log("props", props);
    return localStorage.getItem("ownerToken") ? true : false;
  };

  console.log("...rest", rest);
  console.log("children", children);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : console.log('not logged in')
      }
    />
  );
}

// export default function OwnerPrivateRoute({ children, ...rest }) {
//   console.log("...rest", rest);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuthenticated() ? (children) : (<Redirect to={{ pathname: "/", state: { from: location }}}/>)
//       }
//     />
//   );
// }
