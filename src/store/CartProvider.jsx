import React, { useReducer, useState, useEffect } from "react"; // Added useEffect import
import MyContext from "./MyContext";

const defaultState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "SET_CART_ITEMS") {
    let totalPrice = 0;
    let cartItems=[];
    for (let key in action.items) {
      cartItems.unshift(action.items[key]);
      totalPrice += action.items[key].price * action.items[key].amount;
    }
    return {
      cartItems: cartItems,
      totalPrice: totalPrice,
    };
  } else if (action.type === "DELETE") {
    const updatedCartItems = state.cartItems.filter(
      (cartItem) => cartItem.id !== action.id
    );

    const deletedCartItem = state.cartItems.find(
      (cartItem) => cartItem.id === action.id
    );

    return {
      cartItems: updatedCartItems,
      totalPrice:
        state.totalPrice - deletedCartItem.price * deletedCartItem.amount,
    };
  } else {
    return defaultState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState); // Changed dispatchedCart to dispatchCart
  const [token, setToken] = useState(null);

  useEffect(() => {});

  useEffect(() => {
    // Fetch cart items when token changes
    if (token) {
      async function fetchCartItems() {
        try {
          const getLoginData = JSON.parse(localStorage.getItem(token));
          // console.log(getLoginData);
          if (getLoginData) {
            const filteredEmail = getLoginData.email
              .replace("@", "")
              .replace(".", "");
            const response = await fetch(
              `https://ecommerce-website-274ca-default-rtdb.firebaseio.com/cart/${filteredEmail}.json`,
              {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              }
            );
            const cartItems = await response.json();
            if(!response.ok)  throw new Error(response.data.error);
            // Added a SET_CART_ITEMS action type
            // console.log(cartItems);
            dispatchCart({ type: "SET_CART_ITEMS", items: cartItems });
          }
        } catch (error) {
          alert(error.message);
        }
      }
      fetchCartItems();
    }
  }, [token]);

  const addCartItemHandler = (cartItems) => {
    dispatchCart({ type: "SET_CART_ITEMS", items: cartItems });
  };

  const deleteCartItemHandler = async (id, _id) => {
    dispatchCart({ type: "DELETE", id: id });
  };

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
    dispatchCart({ type: "RESET" }); // Added a RESET action type
  };

  let isLoggedIn = !!token;

  let [getToken] = Object.keys(localStorage);
  isLoggedIn = !!getToken;

  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
    }, 3e3);
  }, []);

  return (
    <MyContext.Provider
      value={{
        cartItems: cartState.cartItems,
        totalPrice: cartState.totalPrice,
        addCartItem: addCartItemHandler,
        deleteCartItem: deleteCartItemHandler,
        token: token,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedIn: isLoggedIn,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default CartProvider;
