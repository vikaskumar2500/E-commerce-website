import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import MyContext from "../../store/MyContext";
const Header = (props) => {
  const { isLoggedIn, logout, addCartItem } = useContext(MyContext);
  const history = useHistory();
  const logoutHandler = () => {
    logout(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    addCartItem([]);

    history.push("/login");
  };

  return (
    <header className="header">
      <ul className="list">
        <li>
          <NavLink to="/home" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/product">PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>

        {!isLoggedIn && (
          <li>
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        )}

        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        {isLoggedIn && (
          <Button variant="outline-danger" onClick={logoutHandler}>
            Logout
          </Button>
        )}
      </ul>
    </header>
  );
};

export default Header;
