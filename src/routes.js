import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages";
import CreateEj from "./components/pages/create_ej";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/crie-sua-ej">
          <CreateEj />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
