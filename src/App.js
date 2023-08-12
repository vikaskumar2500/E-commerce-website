import "./App.css";
import CartItem from "./components/Cart/CartItem";
import React, { useMemo, useState, useContext, useEffect } from "react";
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
import axios from "axios";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const myCtx = useContext(MyContext);

  const productsArr = useMemo(
    () => [
      {
        id: 1,
        rate: (Math.random() * 3 + 2).toFixed(1),
        company: "Smartees",
        title: "Men Full Sleeve Printed Hooded",
        price: 100,
        imageUrl: "assests/hoodie1/hoodie1.webp",
      },

      {
        id: 2,
        rate: (Math.random() * 3 + 2).toFixed(1),
        company: "Fastoche",
        title: "Men Full Sleeve Printed Hooded",
        price: 50,
        imageUrl: "assests/hoodie2/hoodie2.webp",
      },

      {
        id: 3,
        rate: (Math.random() * 3 + 2).toFixed(1),
        company: "Alan Jones",
        title: "Men Full Sleeve Solid Hooded",
        price: 70,
        imageUrl: "assests/hoodie3/hoodie3.webp",
      },

      {
        id: 4,
        rate: (Math.random() * 3 + 2).toFixed(1),
        company: "Kay Dee",
        title: "Men Colorblock Hooded",
        price: 100,
        imageUrl: "assests/hoodie4/hoodie4.webp",
      },
    ],
    []
  );

  const cartButtonHandler = (show) => {
    setShowCart(show);
  };

  useEffect(() => {
    const [getToken] = Object.keys(localStorage);
    if (getToken) myCtx.login(getToken);
    let getLoginData = JSON.parse(localStorage.getItem(myCtx.token));
    let filteredEmail = "";
    if (getLoginData)
      filteredEmail = getLoginData.email.replace("@", "").replace(".", "");
    axios(
      `https://crudcrud.com/api/32851ad95abb43c4b86c9d8004c19c68/cart${filteredEmail}`
    )
      .then((res) => res.data)
      .then((data) => {
        // const productListArray = [];
        for (let key in data) {
          const productItem = data[key];
          myCtx.addCartItem({ ...productItem });
        }
        // console.log(productListArray);
        // myCtx.addCartItem(productListArray);
      })
      .catch((error) => alert(error.message));
  }, [myCtx.isLoggedIn]);
  setTimeout(() => {
    localStorage.clear();
  }, 10e5);

  return (
    <Router>
      <Header onCart={cartButtonHandler} />
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          {myCtx.isLoggedIn && (
            <Route exact path="/product">
              <Products products={productsArr} />
              {showCart && <CartItem onCancel={cartButtonHandler} />}
            </Route>
          )}
          {!myCtx.isLoggedIn && (
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
          {!myCtx.isLoggedIn && (
            <Route exact path="/login">
              <Login />
            </Route>
          )}
          {myCtx.isLoggedIn && (
            <Route exact path="/login">
              <Redirect to="/product" />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default React.memo(App);
