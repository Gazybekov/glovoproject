import "./style/Header.css";
import search from "./img/header_img/icons8-search.svg";
import CardItem from "./CardItem";
import "./style/Header.css";
import square from "./img/header_img/sections-square.svg";
import { useProducts } from "../../context/ProductContextProvider";
import { useEffect, useState } from "react";

const StoreSection = () => {
  const { getProducts, state, searchResult } = useProducts();
  const [filterValue, setFilterValue] = useState("");
  const products = state.products;
  const categories = [...new Set(products.map((product) => product.category))];

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = filterValue
    ? products.filter((product) => product.category === filterValue)
    : products;

  return (
    <>
      <div className="store__page">
        <div className="square">
          <img src={square} alt="" />
          <p>Разделы</p>
        </div>
        <div className="filter">
          <ul>
            <li>
              <button onClick={() => setFilterValue("")}>Все</button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button onClick={() => setFilterValue(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
        <div className="box_products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <CardItem key={product.id} item={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreSection;
