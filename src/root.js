/* Copyright (c) 2018-2019 Synopsys, Inc. All rights reserved worldwide. */

import React, { Component } from "react";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from "./store";
import Dash from "./dash";
class Root extends Component {
  constructor(props) {
    super(props);
  } /* eslint-disable import/no-webpack-loader-syntax */
  /* eslint-disable max-len */
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Dash />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
/* eslint-enable */

export default Root;
