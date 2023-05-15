import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/Product/AddProduct";
import Katalog from "./components/Katalog/Katalog";
import Nav from "./components/Nav/Nav";
import Header from "./components/Partners_page/Header";
import PartnersMain from "./components/Partners_page/PartnersMain";
import EditCardPage from "./components/Product/EditCardPage";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="reg" element={<Register />} />
        <Route path="/addproducts" element={<AddProduct />} />
        <Route path="/products" element={<PartnersMain />} />
        <Route path="/kfc" element={<PartnersMain />} />
        <Route path="/" element={<Nav />} />
        <Route path="/kata" element={<Katalog />} />
        <Route path="/edit/:id" element={<EditCardPage />} />
      </Routes>
    </>
  );
};

export default App;
