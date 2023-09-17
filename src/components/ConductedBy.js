import React, { useRef } from 'react';
import Heading from './Heading';
import SITELogo from '../assets/logos/SITE.png';
// import G20Logo from "../assets/logos/G20.png";
// import IICLogo from "../assets/logos/IIC.png";
// import AzadiLogo from "../assets/logos/Azadi.png";
import echo3D from '../assets/logos/echo3D.png';
import LavieSports from '../assets/logos/LavieSport.png';
import Wolfram from '../assets/logos/Wolfram.png';
import axure from '../assets/logos/Axure.png';
import '../styles/ConductedBy/index.css';
import Subheading from './ConductedBy/subheading';
import '../styles/ConductedBy.css';
import useIntersection from './useIntersection';

export default function ConductedBy() {
  const ref3 = useRef();
  const inViewport1 = useIntersection(ref3, '0px'); // Trigger as soon as the element becomes visible
  const inViewport2 = useIntersection(ref3, '-200px'); // Trigger if 200px is visible from the element

  // if (inViewport1) {
  //     console.log('in viewport:', ref.current);
  // }
  if (inViewport2) {
    console.log('in viewport:', ref3.current);
  }

  const ref4 = useRef();
  const inViewport3 = useIntersection(ref4, '0px'); // Trigger as soon as the element becomes visible
  const inViewport4 = useIntersection(ref4, '-200px'); // Trigger if 200px is visible from the element

  // if (inViewport1) {
  //     console.log('in viewport:', ref.current);
  // }
  if (inViewport4) {
    console.log('in viewport:', ref4.current);
  }

  return (
    <div className='body'>
      <div ref={ref3}>
        <svg
          className='cb-svg'
          width='32vw'
          viewBox='0 0 550 198'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className={inViewport2 ? 'cb-path' : 'cb-no-path'}
            d='M548.509 0.173956L548.51 117.176L1.00691 117.175L1.00684 197.738'
            stroke='#FF009E'
            strokeWidth='1.5'
          />
        </svg>
      </div>

      <Heading heading='Conducted By' />

      <div ref={ref4}>
        <svg
          className='cb2-svg'
          viewBox='0 0 1126 885'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* <path
            className={inViewport4 ? 'cb2-path' : 'cb2-no-path'}
            stroke='#FF009E'
            stroke-width='1.5'
            d='M1115 763a5 5 0 1 0 10 0a5 5 0 1 0 -10 0'
          /> */}
          <path
            className={inViewport4 ? 'cb2-path' : 'cb2-no-path'}
            d='M634 1H902L1017 58H1090V347.5H1V710.5H163L311 762.5H744.5M744.5'
            stroke='#FF009E'
            stroke-width='1.5'
          />
        </svg>
      </div>

      <div className='SITE-logo'>
        <img className='SITE-logo-inner' src={SITELogo} alt='SITE Logo' />
      </div>
      <Subheading />
      <div className='other-logos'>
        <div className='G20-logo'>
          <img className='G20-logo-inner' src={echo3D} alt='echo3D Logo' />
        </div>
        <div className='IIC-logo mt-10'>
          <img
            className='IIC-logo-inner'
            src={LavieSports}
            alt='LavieSports Logo'
          />
        </div>
        <div className='Azadi-logo'>
          <img className='Azadi-logo-inner' src={Wolfram} alt='Wolfram Logo' />
        </div>
        <div className='axure-logo mt-10'>
          <img className='axure-logo-inner' src={axure} alt='Azure Logo' />
        </div>
      </div>
    </div>
  );
}
