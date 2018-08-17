import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./containers/root";
import "./styles/vendor-styles";
import "./styles/app.global.scss";

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root"),
);

if (module["hot"]) {
  module["hot"].accept(() => {
    const NextRoot = require("./containers/root");
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById("root"),
    );
  });
}
