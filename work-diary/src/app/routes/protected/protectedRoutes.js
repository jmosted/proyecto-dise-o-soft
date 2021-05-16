import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from "lodash";
import PrivateRoute from "../Guards/loginGuard";
import configRouting from "./configProtectedRoutes";

const Routing = () => {
  return (
    <Router>
      <Switch>
        {map(configRouting, (route, index) => (
          <PrivateRoute key={index} path={route.path} exact={route.exact}>
            <route.page />
          </PrivateRoute>
        ))}
      </Switch>
    </Router>
  );
};

export default Routing;