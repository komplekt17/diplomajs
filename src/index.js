import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./Container/App";
import store from "./Services/redux-store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
