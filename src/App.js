import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/Product/AddProduct";
import Katalog from "./components/Katalog/Katalog";
import Nav from "./components/Nav/Nav";
import Header from "./components/Partners_page/Header";
import PartnersMain from "./components/Partners_page/PartnersMain";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/products" element={<AddProduct />} />
        <Route path="/kfc" element={<PartnersMain />} />
        <Route path="/" element={<Nav />} />
        <Route path="/burgers" element={<Katalog />} />
        <Route path="reg" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
