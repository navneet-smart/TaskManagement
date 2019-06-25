import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoutes from "./private.routes";
import Login from "./containers/login";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" name="login" component={Login} />
        <Route name="user" path="/user" component={PrivateRoutes} />
      </Switch>
      <Redirect from="/" to="/login" />
    </Router>
  );
};

export default Routes;
