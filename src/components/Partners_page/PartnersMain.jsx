import React from "react";
import Header from "./Header";
import StoreSection from "./StoreSection";
import "./style/Header.css";
import FillterSection from "./FillterSection";
import Cart from "../Cart/Cart";

const PartnersMain = () => {
  return (
    <div>
      <Header />

      <div className="store-wrapper">
        <FillterSection></FillterSection>
        <StoreSection />
        <Cart></Cart>
      </div>
    </div>
  );
};

export default PartnersMain;
