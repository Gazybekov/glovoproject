import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const Read = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  //pagination
  //   const [page, setPage] = useState(1);
  //   const itemsPerPage = 10;
  //   const count = Math.ceil(products.length / itemsPerPage);

  //   const handleChange = (e, p) => {
  //     setPage(p);
  //   };

  //   function currentData() {
  //     const begin = (page - 1) * itemsPerPage;
  //     const end = begin + itemsPerPage;
  //     return products.slice(begin, end);
  //   }

  return (
    <>
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
            <ProductCard key={item.id} item={item} />
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
    </>
  );
};

export default Read;
