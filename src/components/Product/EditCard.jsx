import { Box, Button, TextField, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";

const EditCard = () => {
  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();
  console.log(productDetails);

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

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
      <Box sx={{ width: "60vw", margin: "10vh auto", textAlign: "center" }}>
        <Typography variant="h4">Изменения продукта</Typography>
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="Картинка продукта"
          variant="outlined"
          size="small"
          name="image"
          onChange={handleInp}
          value={product.image || ""}
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
          value={product.name || ""}
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
          value={product.price || ""}
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
          value={product.description || ""}
        />

        <Button
          onClick={() => saveEditedProduct(product)}
          fullWidth
          variant="outlined"
        >
          Save Changes
        </Button>
      </Box>
    </>
  );
};

export default EditCard;
