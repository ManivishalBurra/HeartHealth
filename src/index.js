import React from 'react';
import ReactDOM from "react-dom/client";
import Render from './Render';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Render />
  </React.StrictMode>
);

reportWebVitals();

