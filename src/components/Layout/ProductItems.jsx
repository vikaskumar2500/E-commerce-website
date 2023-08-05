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
    <div className="product">
      <h1>COLORS</h1>

      <ul className="product-items">
        {props.products.map((product) => (
          <li key={product.title} className="product-item">
            <h3>{product.title}</h3>
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
    </div>
  );
};

export default ProductItems;
