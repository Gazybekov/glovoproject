import React, { useState } from "react";
import "../Partners_page/style/Header.css";
import { useCart } from "../../context/CartContextProvider";
import minus from "../Partners_page/img/header_img/minus.svg";
import { useProducts } from "../../context/ProductContextProvider";
import { Box, Grid, Pagination } from "@mui/material";
import CardItem from "../Partners_page/CardItem";
import "../Partners_page/style/Header.css";
import pluss from "../Partners_page/img/header_img/plus-new.svg";
import { calcTotalPrice } from "../../helpers/function";

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

  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };
  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      <Grid item md={9}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            my: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          {currentData().map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </Box>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
      </Grid>
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
