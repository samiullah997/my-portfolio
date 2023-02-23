/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import './index.scss';

const AnimatedLetters = ({ lettersClass, strArray, idx }) => (
  <span>
    {
                strArray.map((char, i) => (
                  <span key={char + i} className={`${lettersClass} _${i + idx}`}>{char}</span>
                ))
            }
  </span>
);

export default AnimatedLetters;
