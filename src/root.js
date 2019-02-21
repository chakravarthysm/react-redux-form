/* Copyright (c) 2018-2019 Synopsys, Inc. All rights reserved worldwide. */

import React, { Component } from "react";
import { Provider } from "react-redux";
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
        <div className="App">
          <Dash />
        </div>
      </Provider>
    );
  }
}
/* eslint-enable */

export default Root;
