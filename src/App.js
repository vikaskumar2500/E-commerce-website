import "./App.css";
import CartItem from "./components/Cart/CartItem";
import React, { useMemo, useState, useContext } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Contact from "./ContactUs/Contact";
import Products from "./components/Layout/Products";
import Login from "./components/Login/Login";
import MyContext from "./store/MyContext";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const { isLoggedIn } = useContext(MyContext);

  const productsArr = useMemo(
    () => [
      {
        id: 1,
        rate: 4.5,
        company: "Smartees",
        title: "Men Full Sleeve Printed Hooded",
        price: 599,
        imageUrl: "assests/hoodie1/hoodie1.webp",
      },

      {
        id: 2,
        rate: 4.2,
        company: "Fastoche",
        title: "Men Full Sleeve Printed Hooded",
        price: 749,
        imageUrl: "assests/hoodie2/hoodie2.webp",
      },

      {
        id: 3,
        rate: 3.8,
        company: "Alan Jones",
        title: "Men Full Sleeve Solid Hooded",
        price: 500,
        imageUrl: "assests/hoodie3/hoodie3.webp",
      },

      {
        id: 4,
        rate: 4.6,
        company: "Kay Dee",
        title: "Men Colorblock Hooded",
        price: 349,
        imageUrl: "assests/hoodie4/hoodie4.webp",
      },
    ],
    []
  );

  const cartButtonHandler = (show) => {
    setShowCart(show);
  };

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          {isLoggedIn && (
            <Route exact path="/product">
              <Products products={productsArr} onCart={cartButtonHandler} />
              {showCart && <CartItem onCancel={cartButtonHandler} />}
            </Route>
          )}
          {!isLoggedIn && (
            <Route path="/product">
              <Redirect to="/login" />
            </Route>
          )}

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path='/*'>
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
};

export default React.memo(App);
