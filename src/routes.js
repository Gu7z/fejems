import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./components/pages";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <div />
        </Route>
        <Route path="/users">
          <div />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
