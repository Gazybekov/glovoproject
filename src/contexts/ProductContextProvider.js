import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { JSON_API_PRODUCTS } from '../helpers/constst';

export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext)
}



const ProductContextProvider = ({children}) => {
  const [products,setProducts] = useState([]);
  console.log(products);


  const getProducts = async () => {
    const res = await axios(JSON_API_PRODUCTS);
    setProducts(res)
  }
  
  const values = {getProducts,products}
  return (
    <productContext.Provider value= {values}>{children}</productContext.Provider>
  )
}

export default ProductContextProvider