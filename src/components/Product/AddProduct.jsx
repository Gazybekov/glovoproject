import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    picture: "",
    name: "",
    price: 0,
    description: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  return (
    <>
      <Box sx={{ width: "30vw", margin: "10vh auto", textAlign: "center" }}>
        <Typography variant="h4">Новый продукт</Typography>
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="Картинка продукта"
          variant="outlined"
          size="small"
          name="picture"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="Название"
          variant="outlined"
          size="small"
          name="name"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="Цена"
          variant="outlined"
          size="small"
          name="price"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="Описание"
          variant="outlined"
          size="small"
          name="description"
          onChange={handleInp}
        />

        <Button
          onClick={() => addProduct(product)}
          fullWidth
          variant="outlined"
        >
          Добавить новый продукт
        </Button>
      </Box>
    </>
  );
};

export default AddProduct;
