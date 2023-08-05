import React from "react";

const MyContext = React.createContext({
  cartItems: [],
  totalPrice: 0,
  addCartItem: () => {},
  deleteCartItem: () => {},
  showCartIcon: null,
  showCartIconHandler: () => {},
});

export default MyContext;
