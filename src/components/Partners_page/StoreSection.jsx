import React, { useContext, useEffect } from "react";
import "./style/Header.css";
import search from "./img/header_img/icons8-search.svg";
import CardItem from "./CardItem";
import { productContext } from "../../context/ProductContextProvider";
import CartFull from "../Cart/CartFull";

const StoreSection = () => {
  const { products } = useContext(productContext);

  return (
    <div className="store-section">
      <div className="search-input">
        <div className="search">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Искать в KFC"
            className="search-input__field"
          />
        </div>
      </div>
      <h3>Самое популярное</h3>
      <div className="box_propducts">
        {products && products.length > 0 ? (
          products.map((item) => <CardItem key={item.id} item={item} />)
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default StoreSection;
