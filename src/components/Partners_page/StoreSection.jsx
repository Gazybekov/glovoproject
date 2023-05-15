import React, { useContext, useEffect, useState } from "react";
import "./style/Header.css";
import searchh from "./img/header_img/icons8-search.svg";
import CardItem from "./CardItem";
import {
  productContext,
  useProducts,
} from "../../context/ProductContextProvider";
import CartFull from "../Cart/CartFull";
import { Box, Grid, Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const StoreSection = () => {
  const { products } = useContext(productContext);
  const { getProducts } = useProducts();

  //pagination
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

  // search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    getProducts();
    setSearchParams({
      q: search,
    });
  }, [search]);
  // search

  return (
    <div className="store-section">
      <div className="search-input">
        <div className="search">
          <img src={searchh} alt="" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Искать в KFC"
            className="search-input__field"
          />
        </div>
      </div>
      <h3>Самое популярное</h3>
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
    </div>
  );
};

export default StoreSection;
