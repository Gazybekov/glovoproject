import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/Product/AddProduct";
import Katalog from "./components/Katalog/Katalog";
import Nav from "./components/Nav/Nav";
import PartnersMain from "./components/Partners_page/PartnersMain";
import EditCardPage from "./components/Product/EditCardPage";
import CardForm from "./components/Product/CardForm";
import Register from "./components/Register/Register";
import Payment from "./components/Payment/Payment";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/addproducts" element={<AddProduct />} />
        <Route path="/products" element={<PartnersMain />} />
        <Route path="/kfc" element={<PartnersMain />} />
        <Route path="/" element={<Nav />} />
        <Route path="/kata" element={<Katalog />} />
        <Route path="/edit/:id" element={<EditCardPage />} />
        <Route path="/form" element={<CardForm />} />
        <Route path="/registr" element={<Register/>} />
        <Route path="/pay" element={<Payment></Payment>} />
      </Routes>
    </>
  );
};

export default App;
