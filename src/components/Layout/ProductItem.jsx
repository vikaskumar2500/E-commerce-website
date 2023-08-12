import { Button } from "react-bootstrap";
import "./ProductItem.css";
import MyContext from "../../store/MyContext";
import { useContext, useState, useEffect, useCallback } from "react";
import React from "react";
import axios from "axios";

const ProductItem = (props) => {
  const [currImage, setCurrImage] = useState(`${props.img}/hoodie${1}.webp`);
  const [sideImgVisible, setSideImgVisible] = useState(false);
  const cartCtx = useContext(MyContext);

  const { product } = props;

  let getLoginData = JSON.parse(localStorage.getItem(cartCtx.token));
  const filteredEmail = getLoginData.email.replace("@", "").replace(".", "");

  const buttonHandler = useCallback(
    (item) => {
      cartCtx.addCartItem({
        ...item,
        amount: 1,
      });

      const Object = {
        ...product,
        amount: 1,
      };
      // console.log(filteredEmail);
      axios
        .post(
          `https://crudcrud.com/api/32851ad95abb43c4b86c9d8004c19c68/cart${filteredEmail}`,
           Object 
        )
        .then((res) => {
          // console.log(res);
          if (res.status >= 200 && res.status < 300) {
            return res.data;
          } else {
            throw new Error(res.data.error);
          }
        })
        .then((data) => {
         // console.log(data);
         return;
        })
        .catch((error) => alert(error.message));
    },
    [cartCtx,product, filteredEmail]
  );

  // useEffect(() => {}, [filteredEmail]);


  useEffect(() => {
    if (!sideImgVisible) setCurrImage(`${props.img}/hoodie${1}.webp`);
  }, [props.img, sideImgVisible]);

  const sideImgHandler = useCallback(
    (imageNum) => {
      // console.log('Running');
      setCurrImage(`${props.img}/hoodie${imageNum}.webp`);
    },
    [props.img]
  );

  const currImgHandler = useCallback(() => {
    setSideImgVisible((prev) => !prev);
  }, [setSideImgVisible]);

  const title = sideImgVisible
    ? "again click to close images"
    : "for more images click this";

  return (
    <li key={product.id} className="product-item">
      <div className="main">
        {sideImgVisible && (
          <div className="sub-images">
            {[1, 2, 3, 4].map((imageNum) => (
              <img
                key={imageNum}
                src={`${props.img}/hoodie${imageNum}.webp`}
                alt="not found"
                onMouseOverCapture={sideImgHandler.bind(null, imageNum)}
              />
            ))}
          </div>
        )}
        <div className=" images">
          <div className="current-image">
            <Button variant="" onClick={currImgHandler} className="curr-button">
              <img
                src={currImage}
                alt="images not found"
                className="main-image"
                title={title}
              />
            </Button>
          </div>
          <div className="info">
            <div className="details">
              <span className="company-name">{product.company}</span>
              <br />
              <span>{product.title}</span>
              <div className="price-rating">
                <span className="price">₹{product.price}</span>
                <span className="rating">
                  {props.rate}
                  <img src="assests/star.svg" alt="not found" />
                </span>
              </div>
            </div>
            <Button
              className="btn cart-button"
              onClick={buttonHandler.bind(null, product)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
