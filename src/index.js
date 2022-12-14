import React from "react";

import ReactDOM from "react-dom/client";
import HttpsRedirect from "react-https-redirect";

import App from "./App";
import "./fonts/Betatron-Regular.otf";
import "./fonts/NeueHaasDisplayBlack.ttf";
import "./fonts/NeueHaasDisplayThin.ttf";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
window.__CONFIG__ = {
  NODE_ENV: process.env.NODE_ENV,
  REACT_APP_EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HttpsRedirect>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HttpsRedirect>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
