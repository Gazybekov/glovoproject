import React, { useState } from "react";
import "./style/Header.css";
import topBannerBackground from "./img/header_img/top-banner-background.svg";
import arrow from "./img/header_img/white-arrow-png-41944.png";
import scooter from "./img/header_img/scooter-1050.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "../Register/Register.css";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";

const Header = () => {
  const {
    user: { email },
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
    closeModal,
    isModalOpen,
    setIsModalOpen,
  } = useAuth();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    // Если пользователь уже зарегистрирован, вызываем функцию handleSignIn
    if (isLoggedIn) {
      handleLogin();
    } else {
      // В противном случае, вызываем функцию handleSignUp
      handleSignUp();
    }
  };

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
            <button className="btn_header" onClick={openModal}>
              Начать!
            </button>
          </div>
        </div>
      </div>
      <div className="logo_box">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/glovo-white.svg"
            alt=""
            className="logoGlovo"
          />
        </Link>
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
          {email === ADMIN ? (
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
          ) : (
            <div className="info" style={{ width: "22%" }}>
              <div className="scooter_section" style={{ width: "38%" }}>
                <img src={scooter} alt="" />
                <p>80,00 KGS</p>
              </div>
              <div className="rate_section" style={{ width: "43%" }}>
                <img
                  src="https://res.cloudinary.com/glovoapp/f_auto,q_auto:low/store_ratings/rating_good.png"
                  alt=""
                />
                <span>95%</span>
                <span>Хорошо</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="custom-overlay"
        className="custom-modal_registr"
      >
        <div className="main_box">
          <div className="box">
            {hasAccount ? (
              <div>
                <div className="box_h2">
                  <h2>Войти в Glovo</h2>
                </div>

                <div className="box_h4">
                  <h4>
                    Еще не зарегистрированы в Glovo?
                    <button onClick={() => setHasAccount(false)}>
                      Зарегистрироваться
                    </button>
                  </h4>
                </div>
              </div>
            ) : (
              <div>
                <div className="box_h2">
                  <h2>Зарегистрироваться в Glovo</h2>
                </div>

                <div className="box_h4">
                  <h4>
                    Уже зарегистрированы?{" "}
                    <button onClick={() => setHasAccount(true)}>Войти</button>
                  </h4>
                </div>
              </div>
            )}

            <div className="box_btn">
              <button>
                <img
                  src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/icons/social/facebook.svg"
                  alt=""
                />
                Регистрация c помощью Facebook
              </button>
            </div>
            <div className="inp2">
              <img
                src="https://logowik.com/content/uploads/images/783_email.jpg"
                alt=""
              />
              <input
                type="text"
                placeholder="Адрес эл.почты"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="email-error"
              />
              <div id="email-error">{emailError}</div>
            </div>
            <div className="inp3">
              <img
                src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-circle-password-icon-vectors-png-image_1738057.jpg"
                alt=""
              />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="password-error"
              />
              <div id="password-error">{passwordError}</div>
            </div>
            {hasAccount ? (
              <div className="btn2">
                <button onClick={handleLogin}>Войти с помощью эл. почты</button>
              </div>
            ) : (
              <div className="btn2">
                <button onClick={handleSignUp}>
                  Зарегистрироваться c помощью эл.почты
                </button>
              </div>
            )}
            <div className="p">
              <p>
                Создавая учетную запись, вы автоматически принимаете наши
                Условия обслуживания, Политика конфиденциальности и Политика
                использования файлов cookie
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
