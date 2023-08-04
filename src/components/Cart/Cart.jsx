import "./Cart.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const Cart = (props) => {
  const cartCtx = useContext(MyContext);

  const cartBtnHandler = () => {
    props.onCart(true);
  };

  const totalCartNumber = cartCtx.cartItems.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <a href="#cart" className="cart-holder" onClick={cartBtnHandler}>
      Cart
      <span className="cart-number">{totalCartNumber}</span>
    </a>
  );
};

export default Cart;
