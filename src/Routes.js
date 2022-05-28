import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/users" component={Users} />
    </Switch>
  );
};

export default withRouter(Routes);
