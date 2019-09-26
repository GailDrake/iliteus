import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import { fetchData } from "actions/data.js";

import reducers from "./index.js";

const store = () => createStore(reducers, applyMiddleware(thunkMiddleware));

// const reduxCreateStore = () => createStore(rootReducer);

export default ({ element }) => <Provider store={store()}>{element}</Provider>;
