import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Dashboard from "./containers/tasks";
import CreateUser from "./containers/tasks/create";
import { connect } from "react-redux";

interface MyProps {
  hasAccess: boolean;
}

class PrivateRoutes extends React.Component<MyProps> {
  render() {
    return (
      <div className="App">
        <Router>
          {this.props.hasAccess ? (
            <Switch>
              <Route
                exact
                name="tasks"
                path="/user/tasks"
                component={Dashboard}
              />
              <Route
                exact
                name="newtask"
                path="/user/newtask"
                component={CreateUser}
              />
            </Switch>
          ) : (
            <Redirect from="/" to="/login" />
          )}
        </Router>
      </div>
    );
  }
}

const mapState = (state: any) => {
  return {
    hasAccess: state.login.logged_in
  };
};
const mapDispatch = {};

export default connect(
  mapState,
  mapDispatch
)(PrivateRoutes);
