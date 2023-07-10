import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./reset.css";
import "./index.css";

const appContainer = document.getElementById("app");

ReactDOM.createRoot(appContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
