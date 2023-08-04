import './Home.css';
import HomeFooter from './HomeFooter';
import HomeHeader from './HomeHeader';
import HomeSection from './HomeSection';

const Home=()=> {
  return <main className="home">
    <HomeHeader/>
    <HomeSection/>
    <HomeFooter/>
  </main>
}

export default Home;