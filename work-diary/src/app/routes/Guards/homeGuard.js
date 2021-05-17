import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuth = () => {
  const auth = sessionStorage.getItem("token");
  if (auth === null) {
    return true;
  }

  return false;
};
const PublicRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/event",
              state: { message: "Test" },
            }}
          />
        )
      }
    />
  );
};
export default PublicRoute;
