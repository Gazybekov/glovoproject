import React, { useContext, useEffect } from "react";
import "./style/Header.css";
import search from "./img/header_img/icons8-search.svg";
import CardItem from "./CardItem";
import { productContext } from "../../contexts/ProductContextProvider";

const StoreSection = () => {
  const { getProducts, products } = useContext(productContext);
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
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
        {/* {products.data.map((item) => (
          <CardItem key={item.id} item={item}></CardItem>
        ))} */}
        <CardItem></CardItem>
      </div>
    </>
  );
};

export default StoreSection;
