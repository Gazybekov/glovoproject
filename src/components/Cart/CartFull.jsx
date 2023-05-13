import React from "react";
import "../Partners_page/style/Header.css";
import { useCart } from "../../context/CartContextProvider";
import plus from "../Partners_page/img/header_img/plus-new.svg";
import minus from "../Partners_page/img/header_img/minus.svg";

export default function CartFull({ item }) {
  console.log(item);
  const {
    getCart,
    cart,
    changeProductCount,
    deleteCartProduct,
    addProductToCart,
  } = useCart();

  console.log(cart);
  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <div className="cart-section_full">
      <div className="cart-header">
        <h2>Ваш заказ</h2>
      </div>
      <div className="box-fullcart">
        <div className="cart-textbox">
          <p>1x</p>
          <p>name</p>
          <span>price</span>
        </div>
        <div className="btn_cart">
          <button onClick={() => addProductToCart(item)}>
            <img src={minus} alt="" />
          </button>
          <button onClick={() => addProductToCart(item)}>
            <img src={plus} alt="" />
          </button>
        </div>
        <button>Заказать продукты (3) за цена</button>
      </div>
    </div>
  );
}
