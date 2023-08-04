import Cart from "../Cart/Cart";
import "./Header.css";

const Header = (props) => {
  // console.log(props.onCart);
  return (
    <header>
      <ul className="header">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#store">STORE</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <Cart onCart={props.onCart}/>
      </ul>
    </header>
  );
};

export default Header;
