import { Link } from 'react-router-dom';
import './AboutFooter.css';
import facebooklogo from '../../assests/Facebook.png';
import spotifylogo from '../../assests/Spotify.png';  
import youtubelogo from '../../assests/youtube.jpg';

const AboutFooter=()=> {
  return <footer className="about-footer">
    <h2>The Generics</h2>
    <div className="contact-info">
      <Link to='#'><img src={youtubelogo} alt="not found" /></Link>
      <Link to='#'><img src={spotifylogo} alt="not found" /></Link>
      <Link to='#'><img src={facebooklogo} alt="not found" /></Link>
    </div>
  </footer>
};

export default AboutFooter;