import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Axios defaults for backend connection
axios.defaults.baseURL = "http://localhost:8000"; // Change if your backend runs elsewhere
axios.defaults.withCredentials = true; // Needed for Sanctum authentication

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

