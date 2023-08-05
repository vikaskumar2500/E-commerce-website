import "./Cart.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";
import { Button } from "react-bootstrap";

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
    <Button
      variant="light"
      className="cart-holder"
      onClick={cartBtnHandler}
    >
      Cart
      <span className="cart-number">{totalCartNumber}</span>
    </Button>
  );
};

export default Cart;
