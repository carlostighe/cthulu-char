import "./index.css";
import "../node_modules/uikit/dist/css/uikit.min.css";
import "./App.css";
import "./fonts/SpecialElite-Regular.ttf";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Stats from "./components/characters/Stats";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "stats",
        element: <Stats />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
