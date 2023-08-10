import "./Products.css";
import ProductItem from "./ProductItem";
import React from "react";

const img = "assests/hoodie";

const Products = (props) => {

  return (
    <div className="products">
      <h1>COLORS</h1>
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
    </div>
  );
};

export default React.memo(Products);
