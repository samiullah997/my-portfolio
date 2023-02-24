import './index.scss';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, [letterClass]);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I&apos;m very ambitious front-end developer looking for a role in
          established IT company with the opporturnity to work with the
          latest technologies on challenging and diverse project.
        </p>
        <p>
          I&apos;m quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to describe myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fantastic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>
    </div>
  );
};

export default About;
