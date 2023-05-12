import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/Product/AddProduct";
import Katalog from "./components/Katalog/Katalog";
import Nav from "./components/Nav/Nav";
import PartnersMain from "./components/Partners_page/PartnersMain";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/products" element={<AddProduct />} />
        <Route path="/kfc" element={<PartnersMain />} />
        <Route path="/" element={<Nav />} />
        <Route path="/kata" element={<Katalog />} />
      </Routes>
    </>
  );
};

export default App;
