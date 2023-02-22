/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 'm', 'i'];
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'g', 'i', 'n', 'e', 'e', 'r', '.'];

  useEffect(() => setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000), []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass}`}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>’m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={nameArray}
            idx={3}
          />
          <br />
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={jobArray}
            idx={17}
          />
        </h1>
        <h2>Full Stack Developer / Front End Developer / Back End Developer</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;
