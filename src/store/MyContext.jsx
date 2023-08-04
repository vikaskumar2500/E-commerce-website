import React from "react";

const MyContext = React.createContext({
  cartItems: [],
  deleteCartItem: () => {},
});

export default MyContext;
