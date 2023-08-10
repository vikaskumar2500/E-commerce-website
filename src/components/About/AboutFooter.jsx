import { Link } from 'react-router-dom';
import './AboutFooter.css';


const AboutFooter=()=> {
  return <footer className="about-footer">
    <h2>The Generics</h2>
    <div className="contact-info">
      <Link to='#'><img src='assests/youtube.jpg' alt="not found" /></Link>
      <Link to='#'><img src='assests/Spotify.png' alt="not found" /></Link>
      <Link to='#'><img src='assests/Facebook.png' alt="not found" /></Link>
    </div>
  </footer>
};

export default AboutFooter;