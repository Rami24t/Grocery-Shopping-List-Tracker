import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
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

// To make the app load faster on subsequent visits in production
serviceWorkerRegistration.register();