import React, { createContext, useContext, useReducer } from 'react'
import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from '../helpers/function';
import { CART } from '../helpers/const';


export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };

    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };

    default:
      return state;
  }
}

const CartContextProvider = ({children}) => {
const [state,dispatch] = useReducer(reducer,INIT_STATE)

const getCart = () => {
  // достаем данные из localstorage под ключом cart
  let cart = JSON.parse(localStorage.getItem("cart"));

  // делаем проверку на то, что cart существует, если его в хранилище нет, то добавляем под ключом cart объект
  if (!cart) {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        products: [],
        totalPrice: 0,
      })
    );
    cart = {
      products: [],
      totalPrice: 0,
    };
  }

  // обновление состояние корзины
  dispatch({
    type: CART.GET_CART,
    payload: cart,
  });
};

// const addProductToCart = (product) => {
//   let cart = JSON.parse(localStorage.getItem("cart"));

//   // проверка на существование cart
//   if (!cart) {
//     cart = { products: [], totalPrice: 0 };
//   }
//   // формирование продукта, который будет хранится в корзине
//   let newProduct = {
//     item: product, // сам продукт
//     count: 1, // кол-во данного продукта
//     subPrice: +product.price, // стоимость за 1 шт.
//   };

//   // проверка на то, содержится ли уже в корзине продукт, который хотим добавить
//   let productToFind = cart.products.filter(
//     (elem) => elem.item.id === product.id
//   );

//   if (productToFind.length === 0) {
//     cart.products.push(newProduct); // добавляем продукт, если его не было в корзине
//   } else {
//     cart.products = cart.products.filter(
//       (elem) => elem.item.id != product.id // удаляем, если был
//     );
//   }
//   // пересчитываем общую стоимость корзины, т.к выше изменилось кол-во товаров в корзине
//   cart.totalPrice = calcTotalPrice(cart.products);

//   // помещаем одновленные данные в localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));
//   //обновляем состояние
//   dispatch({ type: CART.GET_CART, payload: cart });
// }

// const addProductToCart = (product) => {
//   let cart = JSON.parse(localStorage.getItem("cart"));

//   if (!cart) {
//     cart = { products: [], totalPrice: 0 };
//   }

//   let newProduct = {
//     item: product,
//     count: 1,
//     subPrice: +product.price,
//   };

//   let productToFind = cart.products.filter(
//     (elem) => elem.item.id === product.id
//   );

//   if (productToFind.length === 0) {
//     cart.products.push(newProduct);
//   } else {
//     cart.products = cart.products.filter(
//       (elem) => elem.item.id !== product.id
//     );
//   }

//   cart.totalPrice = calcTotalPrice(cart.products);

//   localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage

//   dispatch({ type: CART.GET_CART, payload: cart });
// };

const addProductToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = { products: [], totalPrice: 0 };
  }

  let productToFind = cart.products.find((elem) => elem.item.id === product.id);

  if (!productToFind) {
    let newProduct = {
      item: product,
      count: 1,
      subPrice: calcSubPrice({ item: product, count: 1 }),
    };
    cart.products.push(newProduct);
  } else {
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === product.id) {
        return {
          ...elem,
          count: elem.count + 1,
          subPrice: calcSubPrice({ item: product, count: elem.count + 1 }),
        };
      }
      return elem;
    });
  }

  cart.totalPrice = calcTotalPrice(cart.products);

  localStorage.setItem("cart", JSON.stringify(cart));

  dispatch({ type: CART.GET_CART, payload: cart });
};




const checkProductInCart = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart'));

  if(cart) {
    let newCart = cart.products.filter((elem) => elem.item.id ==  id);
    return newCart.length > 0 ? true : false;
  }
}

// const changeProductCount = (count,id) => {
//   let cart = JSON.parse(localStorage.getItem("cart"));

//   cart.products = cart.products.map((product) => {
//     if(product.item.id = id) {
//       product.count = count;
//       product.subPrice = calcTotalPrice(product);
//     }
//     return product;
//   });
//   cart.totalPrice = calcTotalPrice(cart.products);
//   localStorage.setItem("cart",JSON.stringify(cart));
//   dispatch({
//     type:CART.GET_CART,
//     payload:cart,
//   });
// };

// const changeProductCount = (count, id) => {
//   let cart = JSON.parse(localStorage.getItem("cart"));

//   cart.products = cart.products.map((product) => {
//     if (product.item.id === id) {
//       product.count = count;
//       product.subPrice = calcTotalPrice([product]);
//     }
//     return product;
//   });

//   cart.totalPrice = calcTotalPrice(cart.products);
//   localStorage.setItem("cart", JSON.stringify(cart));

//   dispatch({
//     type: CART.GET_CART,
//     payload: cart,
//   });
// };

// const changeProductCount = (count, id) => {
//   let cart = JSON.parse(localStorage.getItem("cart"));

//   cart.products = cart.products.map((product) => {
//     if (product.item.id === id) {
//       product.count = count;
//       product.subPrice = calcTotalPrice([product]);
//     }
//     return product;
//   });

//   cart.totalPrice = calcTotalPrice(cart.products); // Recalculate totalPrice based on the updated cart.products array
//   localStorage.setItem("cart", JSON.stringify(cart));

//   dispatch({
//     type: CART.GET_CART,
//     payload: cart,
//   });
// };

const changeProductCount = (count, id, subPrice) => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.products = cart.products.map((product) => {
    if (product.item.id === id) {
      product.count = count;
      product.subPrice = subPrice;
    }
    return product;
  });

  cart.totalPrice = calcTotalPrice(cart.products);
  localStorage.setItem("cart", JSON.stringify(cart));

  dispatch({
    type: CART.GET_CART,
    payload: cart,
  });
};


const deleteCartProduct = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.products = cart.products.filter((elem) => elem.item.id !== id);

  cart.totalPrice = calcTotalPrice(cart.products);
  localStorage.setItem("cart", JSON.stringify(cart));

  dispatch({
    type: CART.GET_CART,
    payload: cart,
  });
}

  const values = {
    addProductToCart,
    getCart,
    checkProductInCart,
    changeProductCount,
    deleteCartProduct,
    cart: state.cart,
  }
  return (
    <cartContext.Provider value={values}>{children}</cartContext.Provider>
  )
}

export default CartContextProvider