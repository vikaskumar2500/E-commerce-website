import "./Cart.css";
import { useContext} from "react";
import MyContext from "../../store/MyContext";
import { Button } from "react-bootstrap";

const Cart = (props) => {
  const cartCtx = useContext(MyContext);


  const cartBtnHandler = () => {
    props.onCart(true);
  };

  let totalCartNumber = 0;
  for (let item of cartCtx.cartItems) {
    totalCartNumber += item.amount;
  }
  return (
    <div className={"cart"}>
      <Button variant="light" className="cart-holder" onClick={cartBtnHandler}>
        Cart
      </Button>
      <span className="cart-number">{totalCartNumber}</span>
    </div>
  );
};

export default Cart;
