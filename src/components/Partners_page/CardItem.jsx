import React, { useContext } from "react";
import plus from "./img/header_img/plus-new.svg";
import "./style/Header.css";

const CardItem = ({ item }) => {
  console.log(item);
  return (
    <div className="main_wrapper">
      <div className="card_box">
        <img
          src="https://res.cloudinary.com/glovoapp/f_auto,c_fill,dpr_2.0,h_60,w_60,q_auto:low,b_transparent/Products/ho0pnt2mv37nmko5afjs"
          alt=""
        />
        <div className="text_title">
          <p>Баскет 10 острых ножек</p>
          <p>Баскет 10 острых ножек</p>
        </div>
      </div>
      <div className="price">
        <span>899,00 KGS</span>
        <img src={plus} alt="" />
      </div>
    </div>
  );
};

export default CardItem;
