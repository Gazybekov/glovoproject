import React, { useState } from "react";
import Header from "./Header";
import HeaderLogIn from "./HeaderLogIn";
import StoreSection from "./StoreSection";
import "./style/Header.css";
import Cart from "../Cart/Cart";
import { useCart } from "../../context/CartContextProvider";
import CartFull from "../Cart/CartFull";
import { useAuth } from "../../context/AuthContextProvider";

const PartnersMain = () => {
  const { cart } = useCart();
  const { email, handleLogout, isLoggedIn, handleLogin, user } = useAuth(); // Используем isLoggedIn из контекста AuthContextProvider
  const [filters, setFilters] = useState({ category: "all" });

  const handleFilterChange = (category) => {
    setFilters({ category });
  };

  return (
    <div>
      {user ? <HeaderLogIn /> : <Header />}

      <div className="store-wrapper">
        <StoreSection filters={filters} />
        {cart.products.length === 0 ? <Cart /> : <CartFull />}
      </div>
    </div>
  );
};

export default PartnersMain;
