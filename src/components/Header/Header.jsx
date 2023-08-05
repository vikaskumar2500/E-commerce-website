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
  };
  const storeLinkHandler = () => {
    cartCtx.showCartIconHandler(true);
  };
  const aboutLinkHandler = () => {
    cartCtx.showCartIconHandler(false);
  };

  return (
    <header >
      <ul className="header">
        <li>
          <NavLink to="/Home" onClick={homeLinkHandler}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Store"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={storeLinkHandler}
          >
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={aboutLinkHandler} varient="light">
            ABOUT
          </NavLink>
        </li>
        {cartCtx.showCartIcon && <Cart onCart={props.onCart} />}
      </ul>
      
    </header>
  );
};

export default Header;
