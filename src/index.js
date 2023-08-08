import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartProvider from "./store/CartProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);
