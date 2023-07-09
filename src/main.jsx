import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import dv from "./assets/dv.gif";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              left: "50%",
              top: "50%",
              position: "absolute",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={dv} alt="loding icon" />
          </div>
        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
