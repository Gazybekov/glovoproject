import "./style/Header.css";
import searchh from "./img/header_img/icons8-search.svg";
import CardItem from "./CardItem";
import "./style/Header.css";
import square from "./img/header_img/sections-square.svg";
import { useProducts } from "../../context/ProductContextProvider";
import { useEffect, useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const StoreSection = () => {
  const { getProducts, state, searchResult } = useProducts();

  // !filter

  const [filterValue, setFilterValue] = useState("");
  const products = state.products;
  const categories = [...new Set(products.map((product) => product.category))];

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = filterValue
    ? products.filter((product) => product.category === filterValue)
    : products;

  // !

  //!pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return filteredProducts.slice(begin, end);
  }
  // esarch
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    getProducts();
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <>
      <div className="store__page">
        <div className="square">
          <img src={square} alt="" />
          <p>Разделы</p>
        </div>
        <div className="filter">
          <ul>
            <li>
              <button onClick={() => setFilterValue("")}>Все</button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button onClick={() => setFilterValue(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="store-section">
        <div className="search-input">
          <div className="search">
            <img src={searchh} alt="" />
            <input
              type="text"
              placeholder="Искать в KFC"
              className="search-input__field"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        </div>

        <Grid item md={9}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              my: "2rem",
              justifyContent: "space-evenly",
            }}
          >
            {currentData().length > 0 ? (
              currentData().map((product) => (
                <CardItem key={product.id} item={product} />
              ))
            ) : (
              <p>No products available</p>
            )}
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
    </>
  );
};

export default StoreSection;
