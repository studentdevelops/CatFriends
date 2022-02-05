import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { searchCats, requestCats } from "./reducer";
import ThunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
// reducers go in createStore then gets passed down to components as props
const logger = createLogger();
const rootReducers = combineReducers({ searchCats, requestCats });
// const store = createStore(
//   rootReducers,
//   applyMiddleware(ThunkMiddleware, logger)
// );

const store = createStore(
  rootReducers,
  applyMiddleware(ThunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
