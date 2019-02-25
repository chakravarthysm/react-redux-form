import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import Root from "./root";
try {
  injectTapEventPlugin();
} catch (e) {}
const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
