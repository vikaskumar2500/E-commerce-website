import { NavLink, NavLinkk } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Header.css";

const Header = (props) => {
  // console.log(props.onCart);
  return (
    <header>
      <ul className="header">
        <li>
          <NavLink to="/Home">HOME</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink to="https://prasadyash2411.github.io/ecom-website/about.html">
            ABOUT
          </NavLink>
        </li>
        <Cart onCart={props.onCart} />
      </ul>
    </header>
  );
};

export default Header;
