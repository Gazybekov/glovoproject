import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
import "./Done.css";
import kfc from "../../assets/kfc.png";

const Done = () => {
  const { cart } = useCart();
  console.log(cart.products);
  return (
    <div>
      <div>
        <div className="glav_div">
          <div className="logo">
            <img src={kfc} alt="" />
          </div>
          <div>
            <h2 className="edit_h4" variant="h4">
              Ваш заказ успешно оформлен!
            </h2>
          </div>
          <div>
            {cart.products.map((item) => (
              <div style={{ textAlign: "start" }}>
                <div
                  style={{
                    color: "black",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                  key={item.item.id}
                >
                  <div className="done1">
                    <h3>{item.item.name}</h3>
                  </div>
                  <div className="done2">
                    <p>{item.count}X</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to={"/"}>
            <button style={{ fontSize: "20px", cursor: "pointer" }}>
              Закрыть
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Done;
