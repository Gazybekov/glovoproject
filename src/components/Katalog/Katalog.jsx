import React, { useState } from "react";
import "./Katalog.css";
import Glovo from "../../assets/glovo.svg";
import { Link } from "react-router-dom";

const Katalog = () => {
  const [value1, onChange1] = useState(48000);
  const [value2, onChange2] = useState(3000);
  const handlePlusClick1 = () => {
    onChange1(value1 + 1);
  };
  const handleMinusClick1 = () => {
    onChange2(value2 + 1);
  };
  const cards = [
    {
      title: "KFC",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/g0tffeh47dogqnmree1m",
      content: "Чтобы заказать доставку из заведения «KFC»",
    },
    {
      title: "Эки Дос",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/tl0c2ctj9a2tirgqzmzr",
      content: "Заведение «Эки Дос» предлагает ассортимент",
    },

    {
      title: "Times Bar",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/erwqnhtlceqkycildbtq",
      content: "Чтобы заказать доставку из заведения «Times Bar»",
    },
    {
      title: "Jojolor",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/ciaulaz3ivucu7zhhdwa",
      content: "Чтобы заказать доставку из заведения «Jojolor",
    },
    {
      title: "Point B",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/llfshhblyy8mrobdlsjj",
      content: "Чтобы заказать доставку из заведения «Point B»",
    },

    {
      title: "Mama pizza",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/bhzopxjqdmpefrgabgli",
      content: "Заведение «Mama pizza» предлагает ассортимент",
    },
    {
      title: "Burger station",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/zqowmnodydvy0rek1kh1",
      content: "Чтобы заказать доставку из заведения «Burger station»",
    },
    {
      title: "Times Bar",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/ye3nv9ibj5n4uapi2zyg",
      content: "Чтобы заказать доставку из заведения «Times Bar»",
    },
    {
      title: "Nathan's",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/dw15qfcyvmcthwt484kx",
      content: "Чтобы заказать доставку из заведения «Nathan's»",
    },
    {
      title: "Burger station",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/v8jifdwydookt3ujqilx",
      content: "Чтобы заказать доставку из заведения «Burger station»",
    },
    {
      title: "Mc Burger",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/ypof6vwwo7vyjqzmilqh",
      content: "Чтобы заказать доставку из заведения «Mc Burger»",
    },
    {
      title: "Breakfast Hall",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/ewbeauzqqr87sno7qagn",
      content: "Чтобы заказать доставку из заведения «Breakfast Hall»",
    },
    {
      title: "Торро Бургер & Борщ",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/u6gpnrrebze5pb31fkhc",
      content: "Заведение «Торро Бургер & Борщ» предлагает большой ассортимент",
    },
    {
      title: "Burger Station",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/sricsnh1ekrzpzghcweu",
      content: "Чтобы заказать доставку из заведения «Burger Station»",
    },
    {
      title: "Malik al Broast",
      image:
        "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_3.0,h_156,w_351,b_transparent/Stores/q7pc0g1pzhrlsydecabz",
      content: "Чтобы заказать доставку из заведения «Malik al Broast»",
    },
  ];
  return (
    <>
      <div className="Nav_glovo">
        <img className="nav_img" src={Glovo} alt="" />

        <input type="text" placeholder="Поиск" />
        <button className="nav_button">Начать!</button>
      </div>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/sorting/near_me_light"
                alt="Фото 1"
              />
              <a href="#">Расстояние</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/sorting/rating_light"
                alt="Фото 2"
              />
              <a href="#">Рейтинг</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/sorting/delivery_fee_light"
                alt="Фото 3"
              />
              <a href="#">Стоимость доставки</a>
            </li>
            <hr />
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/inwbt21iyiizggz1alhk"
                alt="Фото 1"
              />
              <a href="#">Бургеры</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/i8abjcvwjxylemfkkznj"
                alt="Фото 2"
              />
              <a href="#">Курица</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/SearchFilters/mo6egfxaz0qcorzzcs21"
                alt="Фото 3"
              />
              <a href="#">Халяльная</a>
            </li>
            <hr />
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/zlxnvq0nujobiq2fpjb5"
                alt="Фото 1"
              />
              <a href="#">Азиатская</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/so1z4pmoh8xjnnn7mvcx"
                alt="Фото 2"
              />
              <a href="#">Арабская</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/lkknn31h7bkdv14s5lnf"
                alt="Фото 3"
              />
              <a href="#">Восточная</a>
            </li>
            <hr />
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/n2az4lwfiypajqgok9ey"
                alt="Фото 1"
              />
              <a href="#">Блинчики</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/fprtz4opfsanft2hi8cg"
                alt="Фото 2"
              />
              <a href="#">Выпечка</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/dsu6knoymqxjgsvycjlv"
                alt="Фото 3"
              />
              <a href="#">Гриль</a>
            </li>
            <hr />
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/igdyrrx3iwoznsbh4yg4"
                alt="Фото 1"
              />
              <a href="#">Грузинская</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/kxhu6lacrxernpqacaqf"
                alt="Фото 2"
              />
              <a href="#">Десерты</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/iyafcsursewmuotfzvf6"
                alt="Фото 3"
              />
              <a href="#">Донер</a>
            </li>
            <hr />
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/xdvqu6pi2kc2rt0dukwd"
                alt="Фото 1"
              />
              <a href="#">Европейская</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/ttgdadieadpdsk6t9ach"
                alt="Фото 2"
              />
              <a href="#">Завтраки</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/u6ftskcwobyfmkq41esf"
                alt="Фото 3"
              />
              <a href="#">Здоровое питание</a>
            </li>
            <hr />
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/mos7cdyqo7wic3jcqsbu"
                alt="Фото 1"
              />
              <a href="#">Итальянская</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/ye1bfswfbpzdjwrv9mvd"
                alt="Фото 2"
              />
              <a href="#">Китайская</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/w4ume3zd2xyg0g8mb7he"
                alt="Фото 3"
              />
              <a href="#">Корейская</a>
            </li>
            <hr />
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/SearchFilters/w3b0rfbroz4h9ekscsv1"
                alt="Фото 1"
              />
              <a href="#">Лагман</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/xc03fwfottdfeahuffqw"
                alt="Фото 2"
              />
              <a href="#">Мексиканская</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/jwdvk8qh8gyrn6aavkl4"
                alt="Фото 3"
              />
              <a href="#">Морепродукты</a>
            </li>
            <hr />
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/SearchFilters/x9ekqhj35amwm3pzch5g"
                alt="Фото 1"
              />
              <a href="#">Напитки</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/cmxngjpgyrywygm0ln7l"
                alt="Фото 2"
              />
              <a href="#">Паста</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/ywjm2uk3ls9d0cussuyx"
                alt="Фото 3"
              />
              <a href="#">Пекарня</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/SearchFilters/taua2ja07z3qhbvckcc1"
                alt="Фото 3"
              />
              <a href="#">Плов</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/lxgibe3srkgvqrx02zso"
                alt="Фото 3"
              />
              <a href="#">Салаты</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/SearchFilters/h1qthkljfaad60hfvsze"
                alt="Фото 3"
              />
              <a href="#">Стейк</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/r5koryzkjme5ouxddp2c"
                alt="Фото 3"
              />
              <a href="#">Круассаны</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/fpp1l4fpd4jkvsmfiezp"
                alt="Фото 3"
              />
              <a href="#">Супы</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/x3en7tdjtrhbpaxaolcw"
                alt="Фото 3"
              />
              <a href="#">Суши</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/zuurobratonms7fd5cbn"
                alt="Фото 3"
              />
              <a href="#">Сэндвичи</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/m6urjeiye5nwxfzjapsk"
                alt="Фото 3"
              />
              <a href="#">Тайская</a>
            </li>
            <hr />
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/cwykx5diyjdwommvmevy"
                alt="Фото 3"
              />
              <a href="#">Торты</a>
            </li>
            <hr />
          </ul>
        </div>
        <div className="card-container">
          {cards.map((card, index) => (
            <div className="card1" key={index}>
              <img src={card.image} alt={`Фото ${index + 1}`} />
              <div
                style={{
                  backgroundColor: "whitesmoke",
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  padding: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {card.title}
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <hr
                    style={{
                      margin: "10px 0",
                      border: "none",
                      borderBottom: "1px solid #ccc",
                      flex: "1",
                    }}
                  />
                  <span style={{ fontSize: "14px", marginRight: "10px" }}>
                    {index + 1}.{card.content}
                  </span>
                  <span style={{ paddingLeft: "30px", fontSize: "12px" }}>
                    {value1}
                  </span>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      onClick={handlePlusClick1}
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    >
                      <img
                        style={{ width: "20px" }}
                        src="https://logowik.com/content/uploads/images/940_like_icon.jpg"
                        alt=""
                      />
                    </button>
                    <span style={{ fontSize: "12px", marginRight: "5px" }}>
                      {value2}
                    </span>
                    <button
                      onClick={handleMinusClick1}
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    >
                      <img
                        style={{ width: "20px" }}
                        src="https://fornote.net/wp-content/uploads/2019/02/dislike.png"
                        alt=""
                      />
                    </button>
                  </div>
                  <Link
                    to="/comment"
                    style={{ marginLeft: "10px", marginTop: "10px" }}
                  >
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        style={{ width: "20px" }}
                        src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                        alt=""
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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

export default Katalog;
