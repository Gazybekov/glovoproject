import React from "react";
import Header from "./Header";
import StoreSection from "./StoreSection";
import "./style/Header.css";
import FillterSection from "./FillterSection";
import Cart from "../Cart/Cart";
import { useCart } from "../../context/CartContextProvider";
import CartFull from "../Cart/CartFull";

const PartnersMain = () => {
  const { cart } = useCart();
  return (
    <div>
      <Header />

      <div className="store-wrapper">
        <FillterSection></FillterSection>
        <StoreSection />
        {cart.products.length === 0 ? <Cart></Cart> : <CartFull></CartFull>}
      </div>
    </div>
  );
};

export default PartnersMain;
