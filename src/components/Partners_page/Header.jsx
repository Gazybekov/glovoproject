import React, { useState } from "react";
import "./style/Header.css";
import topBannerBackground from "./img/header_img/top-banner-background.svg";
import arrow from "./img/header_img/white-arrow-png-41944.png";
import scooter from "./img/header_img/scooter-1050.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "../Register/Register.css";
import { useAuth } from "../../context/AuthContextProvider";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    email,
    handleLogin,
    handleSignUp,
    isLoggedIn,
    setHasAccount,
    emailError,
    passwordError,
  } = useAuth();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    if (isLoggedIn) {
      handleLogin(closeModal);
    } else {
      handleSignUp(closeModal);
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
              <button>Добавить новый прод укт</button>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="custom-overlay"
        className="custom-modal"
      >
        <div className="main_box">
          <div className="box">
            {!isLoggedIn ? (
              <div>
                <div className="box_h2">
                  <h2>Добро пожаловать, {email}</h2>
                </div>

                <div className="box_h4">
                  <h4>Вы успешно вошли в свою учетную запись.</h4>
                </div>
              </div>
            ) : (
              <div>
                <div className="box_h2">
                  <h2>Вход в Glovo</h2>
                </div>

                <div className="box_h4">
                  <h4>
                    Еще не зарегистрированы в Glovo?{" "}
                    <button onClick={() => setHasAccount(false)}>
                      Зарегистрироваться
                    </button>
                  </h4>
                </div>
              </div>
            )}

            {!isLoggedIn && (
              <form onSubmit={handleSubmit}>
                <div className="inp2">
                  <img
                    src="https://logowik.com/content/uploads/images/783_email.jpg"
                    alt=""
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Адрес эл.почты"
                    aria-describedby="email-error"
                    required
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
                    name="password"
                    placeholder="Пароль"
                    aria-describedby="password-error"
                    required
                  />
                  <div id="password-error">{passwordError}</div>
                </div>
                <div className="btn2">
                  <button type="submit">Войти с помощью эл. почты</button>
                </div>
              </form>
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
