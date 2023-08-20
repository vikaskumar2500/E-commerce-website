import "./CartItem.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const CartItem = (props) => {
  const cartCtx = useContext(MyContext);

  const cancelBtnHandler = () => {
    props.onCancel(false);
  };

  const removeBtnHandler = async (id) => {
    cartCtx.deleteCartItem(id);
    const getLoginData = JSON.parse(localStorage.getItem(cartCtx.token));
    if (getLoginData) {
      const filteredEmail = getLoginData.email
        .replace("@", "")
        .replace(".", "");
      try {
        // get all the data
        const resGet = await fetch(
          `https://ecommerce-website-274ca-default-rtdb.firebaseio.com/cart/${filteredEmail}.json`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const getData = await resGet.json();
        if(!resGet.ok) throw new Error(getData.error);

        let getKey = null;
        for(let key in getData) {
          if(getData[key].id === id) {
            getKey = key;
            break;
          }
        }
        const resDel = await fetch(
          `https://ecommerce-website-274ca-default-rtdb.firebaseio.com/cart/${filteredEmail}/${getKey}.json`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await resDel.json();
        if (!resDel.ok) throw new Error(data.error);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const purchaseBtnHandler = () => alert("Thanks for the purchase!!");

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
      {cartCtx.cartItems.length === 0 && (
        <p className="empty-cart">Cart is empty!! Please add cart items</p>
      )}
      <ul className="cart-list">
        {cartCtx.cartItems.map((product) => (
          <li key={product.id} className="cart-item">
            <span className="cart-image">
              <img src={product.imageUrl} alt="not found" />
              <span>{product.title}</span>
            </span>
            <span className="cart-price">{product.price}</span>
            <span className="cart-quantity">
              <input type="text" value={product.amount} readOnly />
              <Button
                variant="outline-danger"
                className="mx-2"
                onClick={() => removeBtnHandler(product.id)}
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
        <span>₹{cartCtx.totalPrice}</span>
      </div>
      <Button
        variant="primary"
        className="btn purchaseBtn"
        onClick={purchaseBtnHandler}
      >
        Purchase
      </Button>
    </div>
  );
};

export default CartItem;
