import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "./QrCode.css";
// import { UserCard } from "./UserCard";
import { QrCode } from "./QrCode";
// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    <QrCode />
  </React.StrictMode>
);
