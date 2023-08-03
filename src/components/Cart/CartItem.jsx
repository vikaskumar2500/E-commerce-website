import "./CartItem.css";

const CartItem = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const cancelBtnHandler=()=> {
    props.onCancel(false);
  }

  return (
    <div className="cart-items">
      <h1>CART</h1>
      <button type="button" className="cancel-btn" onClick={cancelBtnHandler}>X</button>
      <ul>
        {cartElements.map((product) => (
          <li key={product.title}>
            <span className="cart-image">
              <img src={product.imageUrl} alt="not found" />
              <span>{product.title}</span>
            </span>
            <span className="cart-price">{product.price}</span>
            <span className="cart-quantity">
              <input type="text" value={1} />
              <button type="button">REMOVE</button>
            </span>
          </li>
        ))}
      </ul>
      <div className="total-price">
        <h2>Total</h2>
        <span>35</span>
      </div>
      <button type="button" className="btn purchase-btn">Purchase</button>
    </div>
  );
};

export default CartItem;
