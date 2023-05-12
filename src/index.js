import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ProductContextProvider from "./context/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ProductContextProvider>
  <App />
  </ProductContextProvider>


  </BrowserRouter>
);
