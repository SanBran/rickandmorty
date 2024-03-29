import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));
const rootElement = document.getElementById("root");

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = ReactDOM.createRoot(rootElement);
root.render(app);
