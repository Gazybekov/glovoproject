import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
import { useProducts } from "../../context/ProductContextProvider";
import plus from "./img/header_img/plus-new.svg";
import "./style/Header.css";

const CardItem = ({ item }) => {
  const { deleteProduct } = useProducts();
  const { addProductToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="main_wrapper">
      <div className="card_box">
        <img src={item.image} alt="" />
        <div className="text_title">
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="price">
        <span>{item.price},00 KGS</span>
        <button onClick={() => deleteProduct(item.id)}>delete</button>
        <button onClick={() => navigate(`/edit/${item.id}`)}>edit</button>
        <button onClick={() => addProductToCart(item)}>
          <img src={plus} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
