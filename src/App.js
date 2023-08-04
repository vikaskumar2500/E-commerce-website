import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayOut from "./Root/Root";
import ProductItems from "./components/Layout/ProductItems";
import CartItem from "./components/Cart/CartItem";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const productsArr = [
    {
      id: uuidv4(),
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: uuidv4(),
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: uuidv4(),
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: uuidv4(),
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const cartButtonHandler = (show) => {
    setShowCart(show);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          path: "/",
          element: (
            <>
              <h1>COLORS</h1>
              <ProductItems products={productsArr} />
              {showCart && <CartItem onCancel={cartButtonHandler} />}
            </>
          ),
        },
        {
          path: "/Home",
          element:<Home/>,
        },
        

        {
          path: "https://prasadyash2411.github.io/ecom-website/about.html",
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
    // <div>
    //   <Header onCart={cartButtonHandler} />
    //   <h1>COLORS</h1>
    //   <ProductItems products={productsArr} />
    //   {showCart && <CartItem onCancel={cartButtonHandler} />}
    // </div>
  );
};

export default App;
