import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from "lodash";

// import PrivateRoute from "../auth/auth";
import configRouting from "./configPublicRoutes";
const PublicRouting = () => {
  return (
    <Router>
      <Switch>
        {map(configRouting, (route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.page />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default PublicRouting;