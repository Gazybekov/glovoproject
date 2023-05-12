import React from "react";
import Header from "./Header";
import StoreSection from "./StoreSection";
import "./style/Header.css";
import FillterSection from "./FillterSection";

const PartnersMain = () => {
  return (
    <div>
      <Header />
      <div className="store-wrapper">
        <StoreSection />
      </div>
    </div>
  );
};

export default PartnersMain;
