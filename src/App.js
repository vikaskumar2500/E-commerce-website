import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayOut from "./Root/Root";
import ProductItems from "./components/Layout/ProductItems";
import CartItem from "./components/Cart/CartItem";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";

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
      element: <RootLayOut onCart={cartButtonHandler} products={productsArr} />,
      children: [
        {
          path: "/Home",
          element: <Home />,
        },

        {
          path: "/About",
          element: <About />,
        },
      ],
    },
    {
      path: "/Store",
      element: (
        <>
          <Header onCart={cartButtonHandler} />
          <ProductItems products={productsArr} />
          {showCart && <CartItem onCancel={cartButtonHandler} />}
        </>
      ),
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
