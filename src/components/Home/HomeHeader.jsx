import { Button } from "react-bootstrap";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <h1>The Generics</h1>
      <Button variant="green" className="latest-album">
        Get Our Latest Album
      </Button>

      <Button variant="outline-green" className="play-button">
        ►
      </Button>
    </header>
  );
};

export default HomeHeader;
