import "./Cart.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const Cart = (props) => {
  const cartCtx = useContext(MyContext);

  const cartBtnHandler=()=> {
    props.onCart(true);
  }

  return (
    <a href="#cart" className="cart-holder" onClick={cartBtnHandler}>
      Cart
      <span className="cart-number">{cartCtx.cartItems.length}</span>
    </a>
  );
};

export default Cart;
