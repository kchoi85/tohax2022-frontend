import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import CamConfig from "./pages/CamConfig/CamConfig";
import Users from "./pages/Users";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/cam_config" component={CamConfig} />
      <Route exact path="/users" component={Users} />
    </Switch>
  );
};

export default withRouter(Routes);
