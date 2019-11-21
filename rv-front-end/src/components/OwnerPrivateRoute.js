import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import OwnerProperties from "./OwnerProperties";

export default function OwnerPrivateRoute({ children, ...rest }) {

  const isAuthenticated = (props) => {
    console.log('Private: Get', localStorage.getItem("ownerId"))
    console.log("private props", props);
    return localStorage.getItem("ownerToken") ? true : false;
  };

  console.log("...rest", rest);
  console.log("children", children);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          (<Redirect to={{ pathname: `/owners/${localStorage.getItem("ownerId")}`, state: { from: location }}}/>)
        ) : (<Redirect to={{ pathname: "/owners/signup", state: { from: location }}}/>)
      }
    />
  );
}

