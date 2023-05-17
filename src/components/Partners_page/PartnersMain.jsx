import React, { useState } from "react";
import StoreSection from "./StoreSection";
import Header from "../Partners_page/Header";
import "./style/Header.css";
import Cart from "../Cart/Cart";
import { useCart } from "../../context/CartContextProvider";
import CartFull from "../Cart/CartFull";
import { useAuth } from "../../context/AuthContextProvider";
import HeaderLogIn from "../Partners_page/HeaderLogIn";

const PartnersMain = () => {
  const { cart } = useCart();
  const { user } = useAuth(); // Используем isLoggedIn из контекста AuthContextProvider
  const [filters, setFilters] = useState({ category: "all" });

  const handleFilterChange = (category) => {
    setFilters({ category });
  };

  console.log(cart.product);

  return (
    <>
      <div>
        {user ? <HeaderLogIn /> : <Header />}

        <div className="store-wrapper">
          <StoreSection filters={filters} />
          {cart && cart.products.length === 0 ? <Cart /> : <CartFull />}
        </div>
      </div>
    </>
  );
};

export default PartnersMain;
