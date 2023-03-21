import React from "react";
import ReactDOM from "react-dom/client";
import "../public/assets/css/common.scss";
import "../public/assets/css/reset.scss";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
);
