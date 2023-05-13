import React, { useContext, useEffect, useState } from "react";

import "./style/Header.css";
import square from "./img/header_img/sections-square.svg";
import {
  productContext,
  useProducts,
} from "../../context/ProductContextProvider";

const FilterSection = () => {
  const { fetchByParams } = useContext(productContext);
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Получение списка категорий из данных продуктов
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  // Фильтрация продуктов при изменении данных продуктов
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Обработчик для фильтрации по категории
  const handleFilterByCategory = (category) => {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
    fetchByParams("category", category);
  };

  // Обработчик для сброса фильтра по категории
  const handleResetFilter = () => {
    setFilteredProducts(products);
    fetchByParams("category", "all");
  };

  return (
    <div className="store__page">
      <div className="filter">
        <h3>Фильтрация</h3>
        <ul>
          <li>
            <button onClick={handleResetFilter}>Все</button>
          </li>
          {categories.map((category, index) => (
            <li key={index}>
              <button onClick={() => handleFilterByCategory(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="square">
        <img src={square} alt="" />
        <p>Разделы</p>
      </div>
    </div>
  );
};

export default FilterSection;
