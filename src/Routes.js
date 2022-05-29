import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import CamConfig from "./pages/CamConfig/CamConfig";
import Cam from "./pages/Cam/Cam";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/cam_config" component={CamConfig} />
      <Route exact path="/cam" component={Cam} />
    </Switch>
  );
};

export default withRouter(Routes);
