import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => (
  <div className="container home-page">
    <div className="text-zone">
      <h1>
        Hi&apos;
        <br />
        I&apos;m
        <img src={LogoTitle} alt="developer" />
        ami
        <br />
        Software Engineer
      </h1>
      <h2>Full Stack Developer / Front End Developer / Back End Developer</h2>
      <Link to="/contact" className="flat-button">CONTACT ME</Link>
    </div>
  </div>
);

export default Home;
