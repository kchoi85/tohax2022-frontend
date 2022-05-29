import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users";
import Landing from "./pages/Landing/landing"
import Problem from "./pages/Problem/problem";
import Login from "./pages/Login/login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/users" component={Users} />
      <Route exact path = "/" component={Landing}/>
      <Route exact path = "/" component={Problem}/>
    </Switch>
  );
};

export default withRouter(Routes);
