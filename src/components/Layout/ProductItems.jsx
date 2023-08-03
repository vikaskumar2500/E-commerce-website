import "./ProductItems.css";

const ProductItems = (props) => {
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.title}>
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt="images not found" />
          <div className="info">
            <div>${product.price}</div>
            <button type="button">Add To Cart</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductItems;
