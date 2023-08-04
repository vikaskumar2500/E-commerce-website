import MyContext from "./MyContext";
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const cartElements = [
  {
    id: uuidv4(),
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    id: uuidv4(),
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    id: uuidv4(),
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(cartElements);

  const deleteCartItemHandler = (id) => {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <MyContext.Provider
      value={{
        cartItems: cartItems,
        deleteCartItem: deleteCartItemHandler,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default CartProvider;
