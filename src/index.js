import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./store/Reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App";

const store = createStore(Reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
