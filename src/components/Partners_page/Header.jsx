import React from "react";
import "./style/Header.css";
import topBannerBackground from "./img/header_img/top-banner-background.svg";
import arrow from "./img/header_img/white-arrow-png-41944.png";
import scooter from "./img/header_img/scooter-1050.svg";
// import Cart from "./Cart";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="main-box">
        <div className="call-action">
          <img src={topBannerBackground} alt="banner" className="banner_img" />
          <div className="text_container">
            <p>
              Вы тут недавно? Регистрируйтесь и выигрывайте{" "}
              <b>бесплатную доставку</b>
            </p>
            <button className="btn_header">Начать!</button>
          </div>
        </div>
      </div>
      <div className="logo_box">
        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/glovo-white.svg"
          alt=""
          className="logoGlovo"
        />
        <div className="adress">
          <p>Добавьте свой адрес</p>
          <img src={arrow} alt="" className="img_arrow" />
        </div>
      </div>
      <div className="banner">
        <img
          src="https://res.cloudinary.com/glovoapp/q_30,h_225,f_auto/e_blur:400/Stores/g0tffeh47dogqnmree1m"
          alt=""
          className="kfcBanner"
        />
      </div>
      <div className="second-part-of-header">
        <div className="store-info">
          <h1>KFC</h1>
          <div className="info">
            <div className="scooter_section">
              <img src={scooter} alt="" />
              <p>80,00 KGS</p>
              <Link to={"/products"}>
                <button>Добавить новый продукт</button>
              </Link>
            </div>
            <div className="rate_section">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,q_auto:low/store_ratings/rating_good.png"
                alt=""
              />
              <span>95%</span>
              <span>Хорошо</span>
              <span>Хорошо</span>
            </div>
          </div>
        </div>
        {/* <Cart></Cart> */}
      </div>
    </div>
  );
};

export default Header;
