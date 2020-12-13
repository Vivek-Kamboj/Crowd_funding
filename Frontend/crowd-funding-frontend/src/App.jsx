import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Campaign from "./Components/campaign";
import LoginAdmin from "./Components/LoginAdmin";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/campaign/:id" component={Campaign} />
      <Route path="/admin/login" component={LoginAdmin} />
      <Route path="/page-not-found" exact component={PageNotFound} />
      <Route path="/" exact component={LandingPage} />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};

export default App;
