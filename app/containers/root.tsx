import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./home/home-page"; // 首页

export const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </HashRouter>
);
