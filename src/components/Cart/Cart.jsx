import "./Cart.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";
import { Button } from "react-bootstrap";

const Cart = (props) => {
  const cartCtx = useContext(MyContext);

  const cartBtnHandler = () => {
    props.onCart(true);
    cartCtx.showContactHelper(false);
  };

  const totalCartNumber = cartCtx.cartItems.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <div className={!cartCtx.showCartIcon ? "cart hidden" : "cart"}>
      <Button variant="light" className="cart-holder" onClick={cartBtnHandler}>
        Cart
      </Button>
      <span className="cart-number">{totalCartNumber}</span>
    </div>
  );
};

export default Cart;
