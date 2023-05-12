import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { JSON_API_PRODUCTS } from '../helpers/constst';

export const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
}

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(JSON_API_PRODUCTS);
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const values = { getProducts, products, setProducts };

  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
