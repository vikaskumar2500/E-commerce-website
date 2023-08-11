import { NavLink } from "react-router-dom";
import "./Header.css";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const Header = (props) => {
  // console.log(props.onCart);
  const cartCtx = useContext(MyContext);
  const homeLinkHandler = () => {
    cartCtx.showCartIconHandler(false);
    cartCtx.showContactHelper(false);
  };
  const storeLinkHandler = () => {
    cartCtx.showCartIconHandler(true);
    cartCtx.showContactHelper(false);
  };
  const aboutLinkHandler = () => {
    cartCtx.showCartIconHandler(false);
    cartCtx.showContactHelper(false);
  };
  const cantactHelper = () => {
    cartCtx.showContactHelper(true);
    cartCtx.showCartIconHandler(false);
  };

  return (
    <header className="header">
      <ul className="list">
        <li>
          <NavLink
            to="/home"
            activeClassName="active"
            onClick={homeLinkHandler}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" onClick={storeLinkHandler}>
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={aboutLinkHandler}>
            ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={cantactHelper}>
            CONTACT US
          </NavLink>
        </li>
      </ul>
      <div>{<Cart onCart={props.onCart} />}</div>
    </header>
  );
};

export default Header;
