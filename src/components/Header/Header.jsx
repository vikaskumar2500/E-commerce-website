import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {

  return (
    <header className="header">
      <ul className="list">
        <li>
          <NavLink
            to="/home"
            activeClassName="active"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/product">
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
