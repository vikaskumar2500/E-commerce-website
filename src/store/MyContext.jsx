import React from "react";

const MyContext = React.createContext({
  cartItems: [],
  totalPrice: 0,
  addCartItem: () => {},
  deleteCartItem: () => {},
  token: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: null,
});

export default MyContext;
