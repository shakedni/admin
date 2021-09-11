
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";


import {Provider} from 'react-redux';
import store from "./Redux/Store";
import App from "App";


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App></App>
    </Provider>
    </React.StrictMode>,
  document.getElementById("root")
);
