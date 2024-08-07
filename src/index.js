import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "./assets/css/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Toaster position="bottom-center" reverseOrder={false} />
    <App />
  </>
);
