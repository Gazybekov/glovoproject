import { height } from "@mui/system";
import React from "react";
import "./Nav.css";
import glovo from "../../assets/glovo.svg";

const Nav = () => {
  return (
    <>
      <div className="Nav_glovo">
        <img className="nav_img" src={glovo} alt="" />
        <button className="nav_button">Начать!</button>
      </div>
      <div className="Nav_glovo2">
        <h1 className="nav2_h1">Доставка в городе Бишкек</h1>
        <input
          className="nav2_input"
          type="text"
          placeholder="Введите адрес доставк"
        />
        <button className="nav2_button">Найти на карте!</button>
      </div>
      <div className="Nav_glovo3">
        <div>
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/prj0mlcuvmymzfh8pqjz"
            alt=""
          />
          <button>Еда</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/CategoryGroups/bn3rkdoqc98taxkpfvx1"
            alt=""
          />
          <button>Супермаркеты</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/CategoryGroups/nivqqpplsuenepcddnps"
            alt=""
          />
          <button>
            Индивидуальная <br /> доставка
          </button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/ifast9tndsmzlufjlhzq"
            alt=""
          />
          <button>
            Здоровье и <br /> красота
          </button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/uibj67iu7ekoccxurj7i"
            alt=""
          />
          <button>Твори Добро</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/xaogy9ufosvlnruy3jkt"
            alt=""
          />
          <button>
            Glovo <br /> Express
          </button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/ranrx8y2qqq50ux0covx"
            alt=""
          />
          <button>
            Майские <br /> Праздники
          </button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/CategoryGroups/gvzyon4wmct0wn9caj6w"
            alt=""
          />
          <button>
            магазины и <br /> подарки
          </button>
        </div>
      </div>
      <div className="Content">
        <div className="content_we">
          <img
            src="https://res.cloudinary.com/glovoapp/f_auto,h_48,w_48,q_auto:best/CX/new_backend_driven_home_screen/newUserRecommendationsWidgetIconLight"
            alt=""
          />
          <h1>Вам может понравиться</h1>
        </div>
        <div className="osortiment">
          <div className="kfc">
            <img
              src="https://imageproxy.wolt.com/venue/5e986625a1e12db3e6c6ee71/8bff651a-7ff2-11ea-a8c7-0a58647e8dae_kfc_group.jpg"
              alt=""
            />
            <h3>KFC</h3>
            <div className="ok">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
                alt=""
              />
              <h4>96%</h4>
            </div>
          </div>
          <div className="wok">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <h3>WoK Lagman</h3>
            <div className="ok">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
                alt=""
              />
              <h4>96%</h4>
            </div>
          </div>
          <div className="ekidos">
            <img src="https://oshfood.kg/dish_image/10881.png" alt="" />
            <h3>Эки Дос </h3>
            <div className="ok">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
                alt=""
              />
              <h4>96%</h4>
            </div>
          </div>
          <div className="faiza">
            <img
              src="https://s1.eda.ru/StaticContent/Photos/130410124428/150630142514/p_O.jpg"
              alt=""
            />
            <h3>Фаиза</h3>
            <div className="ok">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
                alt=""
              />
              <h4>96%</h4>
            </div>
          </div>
          <div className="daamduu">
            <img
              src="https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg"
              alt=""
            />
            <h3>Daamduu</h3>
            <div className="ok">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
                alt=""
              />
              <h4>96%</h4>
            </div>
          </div>
          <div className="inlavash">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBrYGjiMjB5OaDgVMEQsnUx5XOwv3K3TNKw&usqp=CAU"
              alt=""
            />
            <h3>INLAVASH</h3>
            <div className="ok">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
                alt=""
              />
              <h4>96%</h4>
            </div>
          </div>
          <div className="domino">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg"
              alt=""
            />
            <h3>DOMINO</h3>
            <div className="ok">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
                alt=""
              />
              <h4>96%</h4>
            </div>
          </div>
          <div className="globus">
            <img src="https://globus-online.kg/include/Globus_OG.png" alt="" />
            <h3>GLOBUS</h3>
            <div className="ok">
              <img
                src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
                alt=""
              />
              <h4>96%</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="content_we2">
        <img
          src="https://res.cloudinary.com/glovoapp/f_auto,h_48,w_48,q_auto:best/CX/new_backend_driven_home_screen/newUserRecommendationsWidgetIconLight"
          alt=""
        />
        <h1>Лучшее в г. Bishkek</h1>
      </div>
      <div className="osortiment">
        <div className="wok">
          <img
            src="https://klopotenko.com/wp-content/uploads/2020/05/Grecheskij-salat_siteWeb.jpg?v=1589361222"
            alt=""
          />
          <h3>Appetit</h3>
          <div className="ok">
            <img
              src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
              alt=""
            />
            <h4>96%</h4>
          </div>
        </div>
        <div className="wok">
          <img
            src="https://alterainvest.ru/upload/iblock/b00/b00abc1f85be1c41138764b324038433.jpg"
            alt=""
          />
          <h3>Столовая 312</h3>
          <div className="ok">
            <img
              src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
              alt=""
            />
            <h4>96%</h4>
          </div>
        </div>
        <div className="wok">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h3>American Burger</h3>
          <div className="ok">
            <img
              src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
              alt=""
            />
            <h4>96%</h4>
          </div>
        </div>
        <div className="wok">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7wqdO1mb-WtFC4vuuPi9uByFzuox_njAgw&usqp=CAU"
            alt=""
          />
          <h3>VINOTEKA</h3>
          <div className="ok">
            <img
              src="https://res.cloudinary.com/glovoapp/f_auto,h_40,w_40,q_auto:low/store_ratings/rating_regular.png"
              alt=""
            />
            <h4>96%</h4>
          </div>
        </div>
      </div>
      <div className="Content2">
        <div className="content_dom">
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low,h_140,w_140/https://glovoapp.com/images/landing/cities.svg"
            alt=""
          />
          <h1>Популярные Категории в г. Бишкек</h1>
        </div>
        <div className="dom_button">
          <button>Бургеры</button>
          <button>Халяльная</button>
          <button>Курица</button>
          <button>Восточная</button>
          <button>Европейская</button>
          <button>Фаст-фуд</button>
          <button>Традиционная</button>
          <button>Пицца</button>
          <button>Напитки</button>
          <button>Азиатская</button>
        </div>
      </div>

      <div className="Knam">
        <div className="ruka">
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_lpad,q_auto:low,h_80,w_117,b_transparent/https://glovoapp.com/images/corporate-container/together.svg"
            alt=""
          />
          <h1>Присоединиться к нам</h1>
        </div>
        <div className="ruka_btn">
          <div>
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_2.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/rider-image.png"
              alt=""
            />
            <h2>Стать курьером</h2>
            <p>
              Хотите получить свободу, гибкий график и достойную оплату?
              Доставляйте с Glovo!
            </p>
            <button id="q1">Присоединиться к нам</button>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_2.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/partners-image.png"
              alt=""
            />
            <h2>Стать партнером</h2>
            <p>
              Glovo поможет ускорить рост вашего бизнеса: наши технологии и
              пользовательская база созданы, чтобы увеличить продажи и открыть
              для вас новые возможности!
            </p>
            <button id="q2">Присоединиться к нам</button>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch/q_30,f_auto,c_lpad,dpr_2.0,h_220,w_254,b_transparent/https://glovoapp.com/images/corporate-container/careers-image.png"
              alt=""
            />
            <h2>Вакансии</h2>
            <p>
              Готовы к покорению новой вершины? Если вы амбициозны, скромны и
              любите работать с другими, мы хотим познакомиться с вами!
            </p>
            <button id="q3">Присоединиться к нам</button>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Nav;
