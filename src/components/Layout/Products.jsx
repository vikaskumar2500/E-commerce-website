import "./Products.css";
import ProductItem from "./ProductItem";
import React from "react";
import AboutHeader from "../About/AboutHeader";
import AboutFooter from "../About/AboutFooter";
import Cart from "../Cart/Cart";

const img = "assests/hoodie";

const Products = (props) => {

  return (
    <div className="products">
      <AboutHeader/>
      <Cart onCart={props.onCart}/>
      <h1>Men Hoodies</h1>
      <ul className="product-list">
        {props.products.map((product, index) => (
          <ProductItem
            rate={product.rate}
            key={product.id}
            id={product.id}
            img={`${img}${index + 1}`}
            ind={index + 1}
            product={product}
          />
        ))}
      </ul>
      <AboutFooter/>
    </div>
  );
};

export default React.memo(Products);
