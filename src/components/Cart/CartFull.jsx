import React, { useState } from "react";
import "../Partners_page/style/Header.css";
import { useCart } from "../../context/CartContextProvider";
import minus from "../Partners_page/img/header_img/minus.svg";
import "../Partners_page/style/Header.css";
import pluss from "../Partners_page/img/header_img/plus-new.svg";

export default function CartFull({ item }) {
  const {
    getCart,
    cart,
    changeProductCount,
    deleteCartProduct,
    addProductToCart,
  } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  const handleDecrease = (item) => {
    if (item.count > 1) {
      const updatedCount = item.count - 1;
      const updatedSubPrice = updatedCount * item.item.price;
      changeProductCount(updatedCount, item.item.id, updatedSubPrice);
    } else {
      deleteCartProduct(item.item.id);
    }
  };

  const handleIncrease = (item) => {
    const updatedCount = item.count + 1;
    const updatedSubPrice = updatedCount * item.item.price;

    changeProductCount(updatedCount, item.item.id, updatedSubPrice);
  };
  const getTotalProductCount = (products) => {
    let totalCount = 0;
    products.forEach((item) => {
      totalCount += item.count;
    });
    return totalCount;
  };
  return (
    <div>
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
              <img src={pluss} alt="" />
            </button>
          </div>
          <button>Заказать продукты (3) за цена</button>
        </div>
      </div>
    </div>
  );
}
