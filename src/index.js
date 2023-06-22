import "./index.css";
import "../node_modules/uikit/dist/css/uikit.min.css";
import "./App.css";
import "./fonts/SpecialElite-Regular.ttf";

import React from "react";
import ReactDOM from "react-dom/client";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// register Swiper custom elements
register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
