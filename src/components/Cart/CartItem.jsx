import "./CartItem.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const CartItem = (props) => {
  const cartCtx = useContext(MyContext);

  const cancelBtnHandler = () => {
    props.onCancel(false);
  };

  const removeBtnHandler = (id) => {
    console.log(id);
    cartCtx.deleteCartItem(id);
  };

  // const total_price = cartCtx.cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-items">
      <Button
        variant="secondary"
        className="btn cancel"
        onClick={cancelBtnHandler}
      >
        X
      </Button>
      <h2>CART</h2>
      <p className="empty-cart">Cart is empty!! please add items</p>
      <ul className="cart-list">
        {cartCtx.cartItems.map((product) => (
          <li key={product.id} className="cart-item">
            <span className="cart-image">
              <img src={product.imageUrl} alt="not found" />
              <span>{product.title}</span>
            </span>
            <span className="cart-price">{product.price}</span>
            <span className="cart-quantity">
              <input type="text" value={product.amount} readOnly/>
              <Button
                variant="outline-danger"
                className="mx-2"
                onClick={removeBtnHandler.bind(null, product.id)}
              >
                REMOVE
              </Button>
            </span>
          </li>
        ))}
      </ul>
      <hr />
      <div className="total-price">
        <h2>Total</h2>
        <span>${cartCtx.totalPrice.toFixed(2)}</span>
      </div>
      <Button variant="primary" className="btn purchaseBtn">
        Purchase
      </Button>
    </div>
  );
};

export default CartItem;
