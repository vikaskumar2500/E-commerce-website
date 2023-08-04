import React from "react";

const MyContext = React.createContext({
  cartItems: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
});

export default MyContext;
