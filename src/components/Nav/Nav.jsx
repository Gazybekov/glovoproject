import { height } from "@mui/system";
import React, { useState } from "react";
import "./Nav.css";
import glovo from "../../assets/glovo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEdit = () => {
    console.log(`Имя: ${name}\nАдрес: ${address}\nПароль: ${password}`);
    closeModal();
  };
  return (
    <>
      <div className="Nav_glovo">
        <img className="nav_img" src={glovo} alt="" />
        <button className="nav_button" onClick={openModal}>
          Начать!
        </button>
      </div>
      {/* ----------------- */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />

              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Адрес"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />

              <button type="button" onClick={handleEdit}>
                Edit
              </button>
            </form>

            <button className="close-button" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
      {/* ---------------------- */}
      <div className="Nav_glovo2">
        <h3 className="nav2_h1">Доставка в городе Бишкек</h3>
        <input
          className="nav2_input"
          type="text"
          placeholder="Введите адрес доставк"
        />
        <button className="nav2_button">Найти на карте!</button>
      </div>
      <div className="Nav_glovo3">
        <div className="con1">
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
        <div className="con2">
          <img
            src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/CategoryGroups/gvzyon4wmct0wn9caj6w"
            alt=""
          />
          <button>
            магазины и <br /> подарки
          </button>
        </div>

        {/*  */}
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
          <Link style={{ textDecoration: "none", color: "black" }} to={"/kfc"}>
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
          </Link>
          <div className="wok">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBMTx9LJd_R1WWP9nGiZGu3LLsyMyl0GNLQ&usqp=CAU"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tWKyw6zBuQzMffAxLeNgZco249Qn1VkN9w&usqp=CAU"
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
          <Link to="/burgers">
            <button>Бургеры</button>
          </Link>
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
