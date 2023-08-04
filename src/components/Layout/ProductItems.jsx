import { Button } from "react-bootstrap";
import "./ProductItems.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const ProductItems = (props) => {
  const cartCtx = useContext(MyContext);

  const buttonHandler = (item) => {
    cartCtx.addCartItem({
      ...item,
      amount: 1,
    });
  };

  return (
    <ul className="product-items">
      {props.products.map((product) => (
        <li key={product.title} className="product-item">
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt="images not found" />
          <div className="info">
            <div>${product.price}</div>
            <Button
              variant="secondary"
              onClick={buttonHandler.bind(null, product)}
            >
              Add To Cart
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductItems;
