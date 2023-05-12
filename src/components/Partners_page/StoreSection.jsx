import React, { useContext } from "react";
import "./style/Header.css";
import search from "./img/header_img/icons8-search.svg";
import CardItem from "./CardItem";
import { ProductContext } from "../../contexts/ProductContextProvider";

const StoreSection = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

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
      {products && products.length > 0 ? (
        products.map((item) => <CardItem key={item.id} item={item} />)
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default StoreSection;
