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
            to="/"
            activeClassName={isActive => (!isActive ? StyleSheet : "")}
            onClick={homeLinkHandler}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Store"
            // activeClassName="active"
            onClick={storeLinkHandler}
          >
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            // activeClassName="active"
            onClick={aboutLinkHandler}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            // activeClassName="active"
            onClick={cantactHelper}
          >
            CONTACT US
          </NavLink>
        </li>
      </ul>
      <div>{<Cart onCart={props.onCart} />}</div>
    </header>
  );
};

export default Header;
