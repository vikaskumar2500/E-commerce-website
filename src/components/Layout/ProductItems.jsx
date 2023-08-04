import { Button } from "react-bootstrap";
import "./ProductItems.css";

const ProductItems = (props) => {
  return (
    <ul className="product-items">
      {props.products.map((product) => (
        <li key={product.title} className="product-item">
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt="images not found" />
          <div className="info">
            <div>${product.price}</div>
            {/* <button type="button">Add To Cart</button> */}
            <Button variant="secondary">Add To Cart</Button>{' '}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductItems;
