import React from "react";

const MyContext = React.createContext({
  cartItems: [],
  totalPrice: 0,
  addCartItem: () => {},
  deleteCartItem: () => {},
  showCartIcon: null,
  showCartIconHandler: () => {},
  showContact: null,
  showContactHelper: () => {},
  token: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: null,
});

export default MyContext;
