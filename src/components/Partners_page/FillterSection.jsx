import React from "react";
import "./style/Header.css";
import square from "./img/header_img/sections-square.svg";

const arr = [
  "Самое популярное",
  "БАСКЕТЫ",
  "КУРИЦА",
  "САНДВИЧИ",
  "ГАРНИРЫ",
  "ДЕСЕРТЫ",
  "МОЛОЧНЫЕ КОКТЕЙЛИ",
  "СОУСЫ, ДОПОЛНИТЕЛЬНЫЕ ПРОДУКТЫ",
];

const FillterSection = () => {
  return (
    <div className="store__page">
      <div className="square">
        <img src={square} alt="" />
        <p>Разделы</p>
      </div>
      <ul>
        {arr.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FillterSection;
