import MyContext from "./MyContext";
import React, {useState} from "react";

const CartProvider = (props) => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler=(show)=> {
    setShowCart(show);
  }

  return <MyContext.Provider value={{
    showCart:showCart,
    showCartHandler:showCartHandler,
  }}>{props.children}</MyContext.Provider>;
};

export default CartProvider;