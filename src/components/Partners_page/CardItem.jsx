import React, { useContext } from "react";
import plus from "./img/header_img/plus-new.svg";
import "./style/Header.css";

const CardItem = ({ item }) => {
  console.log(item);
  return (
    <div className="main_wrapper">
      <div className="card_box">
        <img src={item.picture} alt="" />
        <div className="text_title">
          <p>{item.name}</p>
          <p>{item.descrition}</p>
        </div>
      </div>
      <div className="price">
        <span>{item.price}</span>
        <img src={plus} alt="кнопка" />
      </div>
    </div>
  );
};

export default CardItem;
