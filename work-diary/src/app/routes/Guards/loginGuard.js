import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuth = () => {
  const auth = sessionStorage.getItem("token");
  if (auth !== null) {
    return true;
  }
  return false;
};
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { message: "error a la hora autentificación" },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;