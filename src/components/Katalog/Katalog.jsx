import React from "react";
import "./Katalog.css";
import Glovo from "../../assets/glovo.svg";

const Katalog = () => {
  const cards = [
    {
      title: "Карточка 1",
      image: "image1.jpg",
      content: "Содержимое карточки 12",
    },
    {
      title: "Карточка 2",
      image: "image2.jpg",
      content: "Содержимое карточки 2",
    },
    {
      title: "Карточка 3",
      image: "image3.jpg",
      content: "Содержимое карточки 3",
    },
    {
      title: "Карточка 4",
      image: "image4.jpg",
      content: "Содержимое карточки 4",
    },
    {
      title: "Карточка 5",
      image: "image5.jpg",
      content: "Содержимое карточки 5",
    },
    {
      title: "Карточка 6",
      image: "image6.jpg",
      content: "Содержимое карточки 6",
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
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/sorting/rating_light"
                alt="Фото 2"
              />
              <a href="#">Рейтинг</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/sorting/delivery_fee_light"
                alt="Фото 3"
              />
              <a href="#">Стоимость доставки</a>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/inwbt21iyiizggz1alhk"
                alt="Фото 1"
              />
              <a href="#">Бургеры</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/i8abjcvwjxylemfkkznj"
                alt="Фото 2"
              />
              <a href="#">Курица</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/SearchFilters/mo6egfxaz0qcorzzcs21"
                alt="Фото 3"
              />
              <a href="#">Халяльная</a>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/zlxnvq0nujobiq2fpjb5"
                alt="Фото 1"
              />
              <a href="#">Азиатская</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/so1z4pmoh8xjnnn7mvcx"
                alt="Фото 2"
              />
              <a href="#">Арабская</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/lkknn31h7bkdv14s5lnf"
                alt="Фото 3"
              />
              <a href="#">Восточная</a>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/n2az4lwfiypajqgok9ey"
                alt="Фото 1"
              />
              <a href="#">Блинчики</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/fprtz4opfsanft2hi8cg"
                alt="Фото 2"
              />
              <a href="#">Выпечка</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/dsu6knoymqxjgsvycjlv"
                alt="Фото 3"
              />
              <a href="#">Гриль</a>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/igdyrrx3iwoznsbh4yg4"
                alt="Фото 1"
              />
              <a href="#">Грузинская</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/kxhu6lacrxernpqacaqf"
                alt="Фото 2"
              />
              <a href="#">Десерты</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/iyafcsursewmuotfzvf6"
                alt="Фото 3"
              />
              <a href="#">Донер</a>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/xdvqu6pi2kc2rt0dukwd"
                alt="Фото 1"
              />
              <a href="#">Европейская</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/ttgdadieadpdsk6t9ach"
                alt="Фото 2"
              />
              <a href="#">Завтраки</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/u6ftskcwobyfmkq41esf"
                alt="Фото 3"
              />
              <a href="#">Здоровое питание</a>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/mos7cdyqo7wic3jcqsbu"
                alt="Фото 1"
              />
              <a href="#">Итальянская</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/ye1bfswfbpzdjwrv9mvd"
                alt="Фото 2"
              />
              <a href="#">Китайская</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/w4ume3zd2xyg0g8mb7he"
                alt="Фото 3"
              />
              <a href="#">Корейская</a>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/SearchFilters/w3b0rfbroz4h9ekscsv1"
                alt="Фото 1"
              />
              <a href="#">Лагман</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/xc03fwfottdfeahuffqw"
                alt="Фото 2"
              />
              <a href="#">Мексиканская</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/jwdvk8qh8gyrn6aavkl4"
                alt="Фото 3"
              />
              <a href="#">Морепродукты</a>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/SearchFilters/x9ekqhj35amwm3pzch5g"
                alt="Фото 1"
              />
              <a href="#">Напитки</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/cmxngjpgyrywygm0ln7l"
                alt="Фото 2"
              />
              <a href="#">Паста</a>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/glovoapp/q_30,c_pad,f_auto,dpr_2.0,h_22,w_22,b_transparent/filters/ywjm2uk3ls9d0cussuyx"
                alt="Фото 3"
              />
              <a href="#">Пекарня</a>
            </li>
          </ul>
        </div>

        <div className="card-container">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <h2>{card.title}</h2>
              <img src={card.image} alt={`Фото ${index + 1}`} />
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Katalog;
