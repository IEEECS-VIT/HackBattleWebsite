import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import styles from '../styles/Header.module.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-transparent-500 pr-8 pl-8 pt-4 border-neoBlue border-neoBlue-400 border-b-2 z-10'>
        {/*<div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>*/}
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-white-200 hover:text-neoBlue'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto'>
          <div className='text-md flex w-1/2 justify-around pl-8 pr-6'>
            <div className='inline-flex '>
              <Link
                className={`${
                  activeLink === 'home'
                    ? 'border-neoBlue border-b-2 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } items-center px-1 pt-1 text-sm font-medium block mt-4 lg:inline-block lg:mt-0 mr-4`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </Link>
            </div>
            <div className='inline-flex'>
              <Link
                to='/tracks'
                className={`${
                  activeLink === 'tracks'
                    ? 'border-neoBlue border-b-2 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } items-center px-1 pt-1  text-sm font-medium block mt-4 lg:inline-block lg:mt-0 mr-4`}
                onClick={() => handleLinkClick('tracks')}
              >
                Tracks
              </Link>
            </div>
            <div className='inline-flex'>
              <Link
                to='/prizes'
                className={`${
                  activeLink === 'prizes'
                    ? 'border-neoBlue border-b-2 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } inline-flex items-center px-1 pt-1  text-sm font-medium block mt-4 lg:inline-block lg:mt-0 mr-4`}
                onClick={() => handleLinkClick('prizes')}
              >
                Prizes
              </Link>
            </div>
            <div className='inline-flex'>
              <Link
                to='/aboutus'
                className={`${
                  activeLink === 'aboutus'
                    ? 'border-neoBlue border-b-2 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } inline-flex items-center px-1 pt-1  text-sm font-medium block mt-4 lg:inline-block lg:mt-0 mr-4`}
                onClick={() => handleLinkClick('aboutus')}
              >
                About Us
              </Link>
            </div>
            <div className='inline-flex'>
              <Link
                to='/faq'
                className={`${
                  activeLink === 'faq'
                    ? 'border-neoBlue border-b-2 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } inline-flex items-center px-1 pt-1 text-sm font-medium block mt-4 lg:inline-block lg:mt-0 mr-4`}
                onClick={() => handleLinkClick('faq')}
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className='flex-basis-1/2 mr-8'>
            <a
              href='https://google.com'
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)',
              }}
              className='inline-block text-sm px-4 py-2 leading-none border text-darkBlue bg-neoBlue mt-2 lg:mt-0'
            >
              Register Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
