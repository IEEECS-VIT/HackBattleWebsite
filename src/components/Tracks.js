import React, { useRef } from 'react';
import TracksCard from './Tracks/card';
import Heading from './Heading';
import '../styles/Tracks/index.css';
import '../styles/Tracks.css';
import useIntersection from './useIntersection';

const Tracks = () => {
  const ref2 = useRef();
  const inViewport1 = useIntersection(ref2, '0px'); // Trigger as soon as the element becomes visible
  const inViewport2 = useIntersection(ref2, '-200px'); // Trigger if 200px is visible from the element

  // Define the two different d attribute values
  const dAttribute1300to1600 =
    'M407.5 1H412.5H417.5M407.5 1H398M407.5 1H389V52L369.5 80H1V218M398 1V52L372.5 88.5L207.5 89.5V622.5H1V600M417.5 1H426.5M417.5 1V53L446.5 92.5H628.5V273H562M426.5 1H436V52L456 77H824.5V218M426.5 1V52L452.5 85H637V622.7H824.5V';
  const dAttributeAbove1600 =
    'M407.5 1H412.5H417.5M407.5 1H398M407.5 1H389V52L369.5 80H1V218M398 1V52L372.5 88.5L207.5 89.5V522.5H1V500M417.5 1H426.5M417.5 1V53L446.5 92.5H628.5V273H562M426.5 1H436V52L456 77H824.5V218M426.5 1V52L452.5 85H637V522.7H824.5V';

  // Check the screen width to determine which d attribute to use
  const screenWidth = window.innerWidth;
  let dAttribute;

  if (screenWidth >= 1280 && screenWidth < 1600) {
    dAttribute = dAttribute1300to1600;
  } else if (screenWidth >= 1600) {
    dAttribute = dAttributeAbove1600;
  } else {
    dAttribute = dAttribute;
  }
  // if (inViewport1) {
  //     console.log('in viewport:', ref.current);
  // }
  if (inViewport2) {
    console.log('in viewport:', ref2.current);
  }

  return (
    <div id='tracks' className=' track-body'>
      <Heading heading='Tracks' />

      <div ref={ref2}>
        <svg
          className='track-svg'
          viewBox='0 0 826 763'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className={inViewport2 ? 'track-path' : 'track-no-path'}
            d={dAttribute} // Use the dynamically determined d attribute
            stroke='#FF009E'
            strokeWidth='1.5'
          />
        </svg>
      </div>

      <div className='tracks_div'>
        <TracksCard name='WEB 3.0' />
        <TracksCard name='HEALTHCARE ' />
        <TracksCard name='AI/ML ' />
        <TracksCard name='VIT CENTRIC ' />
        <TracksCard name='OPEN INNOVATION (SDGs)' />
      </div>
    </div>
  );
};

export default Tracks;

// M407.5 1H412.5H417.5M407.5 1H398M407.5 1H389V52L369.5 80H1V218M398 1V52L372.5 88.5L207.5 89.5V622.5H1V600M417.5 1H426.5M417.5 1V53L446.5 92.5H628.5V273H562M426.5 1H436V52L456 77H824.5V218M426.5 1V52L452.5 85H637V622.7H824.5V
// M407.5 1H412.5H417.5M407.5 1H398M407.5 1H389V52L369.5 80H1V218M398 1V52L372.5 88.5L207.5 89.5V522.5H1V500M417.5 1H426.5M417.5 1V53L446.5 92.5H628.5V273H562M426.5 1H436V52L456 77H824.5V218M426.5 1V52L452.5 85H637V522.7H824.5V
