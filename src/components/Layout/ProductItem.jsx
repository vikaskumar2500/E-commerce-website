import { Button } from "react-bootstrap";
import "./ProductItem.css";
import MyContext from "../../store/MyContext";
import { useContext, useState, useCallback } from "react";

const url = "https://ecommerce-website-274ca-default-rtdb.firebaseio.com/";

const ProductItem = (props) => {
  const [currImage, setCurrImage] = useState(`${props.img}/hoodie${1}.webp`);
  const [sideImgVisible, setSideImgVisible] = useState(false);
  const cartCtx = useContext(MyContext);

  const { product } = props;

  const buttonHandler = async (item) => {
    const product = {
      ...item,
      amount: 1,
    };

    const getLoginData = JSON.parse(localStorage.getItem(cartCtx.token));

    if (getLoginData) {
      const filteredEmail = getLoginData.email
        .replace("@", "")
        .replace(".", "");
      // fetching all the data so that we can control the amount
      try {
        const resGet = await fetch(`${url}/cart/${filteredEmail}.json`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const cartItems = await resGet.json();
        if (!resGet.ok) throw new Error(cartItems.error.message);
        // console.log(cartItems);
        let targetKey = null;
        for(let key in cartItems) {
          if(cartItems[key].id === product.id) {
            targetKey = key;
            break;
          }
        }
        // console.log(targetKey);
        if (targetKey !== null) {
          product.amount += cartItems[targetKey].amount;
          const resPut = await fetch(
            `${url}/cart/${filteredEmail}/${targetKey}.json`,
            {
              method: "PUT",
              body: JSON.stringify({ ...product }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await resPut.json();
          // console.log("ProductItem put", data);
          if (!resPut.ok) throw new Error(data.error.message);
        } else {
          const resPost = await fetch(`${url}/cart/${filteredEmail}.json`, {
            method: "POST",
            body: JSON.stringify({ ...product }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await resPost.json();
          // console.log("ProductItem post", data);
          if (!resPost.ok) throw new Error(data.error.message);
        }

        // getting updated data
        const resUpdatedGet = await fetch(`${url}/cart/${filteredEmail}.json`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const updateCartItems = await resUpdatedGet.json();
        if (!resUpdatedGet.ok) throw new Error(cartItems.error.message);
          cartCtx.addCartItem(updateCartItems);
        // console.log(updateCartItems);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const sideImgHandler = useCallback(
    (imageNum) => {
      setCurrImage(`${props.img}/hoodie${imageNum}.webp`);
    },
    [props.img]
  );

  const currImgHandler = useCallback(() => {
    setSideImgVisible((prev) => !prev);
  }, []);

  const title = sideImgVisible
    ? "Click to close images"
    : "For more images click here";

  return (
    <li className="product-item">
      <div className="main">
        {sideImgVisible && (
          <div className="sub-images">
            {[1, 2, 3, 4].map((imageNum) => (
              <img
                key={imageNum}
                src={`${props.img}/hoodie${imageNum}.webp`}
                alt="not found"
                onMouseOverCapture={() => sideImgHandler(imageNum)}
              />
            ))}
          </div>
        )}
        <div className="images">
          <div className="current-image">
            <Button variant="" onClick={currImgHandler} className="curr-button">
              <img
                src={currImage}
                alt="Images not found"
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
                  <img src="assets/star.svg" alt="Star" />
                </span>
              </div>
            </div>
            <Button
              className="btn cart-button"
              onClick={() => buttonHandler(product)}
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
