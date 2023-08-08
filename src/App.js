import "./App.css";
import ProductItems from "./components/Layout/ProductItems";
import CartItem from "./components/Cart/CartItem";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./ContactUs/Contact";

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

  return (
    <Router>
      <Header onCart={cartButtonHandler} />
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Store">
            <ProductItems products={productsArr} />
            {showCart && <CartItem onCancel={cartButtonHandler} />}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
