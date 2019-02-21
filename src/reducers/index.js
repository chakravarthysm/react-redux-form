/* Copyright (c) 2018 Synopsys, Inc. All rights reserved worldwide. */

import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";

const appReducer = combineReducers({
  form: formReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
