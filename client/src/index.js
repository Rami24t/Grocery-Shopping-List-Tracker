import React from "react";
import ReactDOM from "react-dom/client";
import { register } from "./serviceWorkerRegistration";
import App from "./App";
import "./index.css";
import ContextProvider from "./components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>  
  </React.StrictMode>
);

register();