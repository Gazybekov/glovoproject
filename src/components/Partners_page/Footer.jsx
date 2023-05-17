import React from "react";
import "../Katalog/Katalog.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="img">
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/glovo-white.svg"
            alt=""
          />
        </div>
        <div className="footer_glovo1">
          <div>
            <h2>Присоединиться к нам</h2>
            <h4>Вакансии</h4>
            <h4>Glovo для партнеров</h4>
            <h4>Курьеры</h4>
            <h4>Glovo Business</h4>
          </div>
          <div>
            <h2>Полезные ссылки</h2>
            <h4>О нас</h4>
            <h4>Часто задаваемые вопросы</h4>
            <h4>Glovo Prime</h4>
            <h4>Блог</h4>
            <h4>Связаться с нами</h4>
            <h4>Безопасность</h4>
          </div>
          <div>
            <h2>Мы в социальных сетях</h2>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
            <h4>Instagram</h4>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_fit,q_auto:low,h_35,w_105/https://glovoapp.com/images/app_store/download-button-new.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_fit,q_auto:low,h_35,w_112/https://glovoapp.com/images/google_play/download-button-new.svg"
              alt=""
            />
            <h4>ПОЛОЖЕНИЯ И УСЛОВИЯ</h4>
            <h4>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h4>
            <h4>ПОЛИТИКА ИСПОЛЬЗОВАНИЯ ФАЙЛОВ COOKIE</h4>
            <h4>КОМПЛАЕНС</h4>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="footer_glovo2">
          <div>
            <h2>Популярные бренды: Киргизия</h2>
            <h4>KFC</h4>
          </div>
          <div>
            <h2>Популярные категории: Киргизия</h2>
            <div id="e3">
              <h4>Пицца</h4>
              <h4>Суши</h4>
              <h4>Лагман</h4>
              <h4>Плов</h4>
            </div>
          </div>
        </div>
        <select className="hero">
          <option>Русский</option>
          <option>English</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
