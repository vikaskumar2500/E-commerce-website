import { useReducer } from "react";
import MyContext from "./MyContext";
import { useState } from "react";

const defaultState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const cartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );

    if (cartItemIndex !== -1) {
      state.cartItems[cartItemIndex].amount += 1;
      return {
        cartItems: state.cartItems,
        totalPrice: state.totalPrice + action.item.price,
      };
    } else {
      return {
        cartItems: [action.item, ...state.cartItems],
        totalPrice: state.totalPrice + action.item.price,
      };
    }
  } else if (action.type === "DELETE") {
    const cartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );

    return {
      cartItems: state.cartItems.filter(
        (cartItem) => cartItem.id !== action.id
      ),
      totalPrice:
        state.totalPrice -
        state.cartItems[cartItemIndex].price *
          state.cartItems[cartItemIndex].amount,
    };
  } else return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchedCart] = useReducer(cartReducer, defaultState);
  const [showCartIcon, setShowCartIcon] = useState(false);
  const [showContact, setShowContact] = useState(true);

  const addCartItemHandler = (cartItem) => {
    dispatchedCart({ type: "ADD", item: cartItem });
  };

  const deleteCartItemHandler = (id) => {
    dispatchedCart({ type: "DELETE", id: id });
  };

  const showCartIconHandler = (show) => {
    setShowCartIcon(show);
  };

  const showContactHelper=(show)=> {
    setShowContact(show);
  }

  return (
    <MyContext.Provider
      value={{
        cartItems: cartState.cartItems,
        totalPrice: cartState.totalPrice,
        addCartItem: addCartItemHandler,
        deleteCartItem: deleteCartItemHandler,
        showCartIcon: showCartIcon,
        showCartIconHandler: showCartIconHandler,
        showContact: showContact,
        showContactHelper: showContactHelper,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default CartProvider;
