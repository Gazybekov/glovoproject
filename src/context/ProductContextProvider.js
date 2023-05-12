import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/const";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};


const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  console.log(state);

  const getProducts = async () => {
    const { data } = await axios(
      `${JSON_API_PRODUCTS}${window.location.search}`
    );

    console.log(getProducts);

    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    navigate("/products");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    getProducts();
    navigate("/products");
  };

  //filter
  const location = useLocation();

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === "all") {
      search.delete(query);
    } else if (query == "price") {
      search.set("price_gte", value[0]);
      search.set("price_lte", value[1]);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    console.log(url);
    navigate(url);
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
