import React, { useState } from "react";
import "./style/Header.css";
import arrow from "./img/header_img/white-arrow-png-41944.png";
import scooter from "./img/header_img/scooter-1050.svg";
import { Link } from "react-router-dom";
import "../Register/Register.css";
import { useAuth } from "../../context/AuthContextProvider";
import profile from "./img/header_img/2867892_emotion_sad_icon.svg";
import menu from "./img/header_img/2867922_menu_icon.svg";
const HeaderLogIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    email,
    password,
    user,
    isLoggedIn,
    emailError,
    passwordError,
    hasAccount,
    setEmail,
    setPassword,
    setHasAccount,
    handleSignUp,
    handleLogin,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    // Если пользователь уже зарегистрирован, вызываем функцию handleLogin
    if (isLoggedIn) {
      handleLogin(closeModal); // Передаем функцию closeModal для закрытия модального окна
    } else {
      // В противном случае, вызываем функцию handleSignUp
      handleSignUp(closeModal); // Передаем функцию closeModal для закрытия модального окна
    }
  };

  return (
    <div>
      <div className="logo_box">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/glovo-white.svg"
            alt=""
            className="logoGlovo"
          />
        </Link>
        <div className="profile_header">
          <div className="adress">
            <p>Добавьте свой адрес</p>
            <img src={arrow} alt="" className="img_arrow" />
          </div>
          <div className="profile">
            <img src={profile} alt="" />
          </div>
          <div className="menu">
            <img src={menu} alt="" />
          </div>
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
            </div>
            <div className="rate_section">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,q_auto:low/store_ratings/rating_good.png"
                alt=""
              />
              <span>95%</span>
              <span>Хорошо</span>
            </div>
            <Link to={"/addproducts"}>
              <button>Добавить новый продукт</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogIn;
