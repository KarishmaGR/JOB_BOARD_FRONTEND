import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { store } from "./Reducers.js";
import { Provider } from "react-redux";
import Router from "./Routes";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
      <Toaster />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
