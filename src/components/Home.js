import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import backgroundImage from '../assets/background.png';
import { Link } from 'react-scroll';

const Home = () => {
  const [activeLink, setActiveLink] = useState('home');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    setRefNumber(localStorage.getItem('refCode'));
  }, []);

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-transparent-500 pr-8 pl-8 py-4 border-neoBlue border-neoBlue-400 border-b-2  z-10" style={{ fontFamily: "Chakra Petch" }}>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white-200 hover:text-neoBlue">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto">
          <div className="text-md flex w-1/2 justify-around pl-8 pr-6">
            <div className="inline-flex">
              <Link
                to="/"
                smooth={true}
                duration={500}
                className={`${activeLink === "home"
                  ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                  : " text-white text-white-500"
                  } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Link>
            </div>
            <div className="inline-flex">
              <Link
                to="tracks"
                smooth={true}
                duration={500}
                className={`${activeLink === "tracks"
                  ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                  : " text-white text-white-500"
                  } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick("tracks")}
              >
                Tracks
              </Link>
            </div>
            <div className="inline-flex">
              <Link
                to="prizes"
                smooth={true}
                duration={500}
                className={`${activeLink === "prizes"
                  ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                  : " text-white text-white-500"
                  } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick("prizes")}
              >
                Prizes
              </Link>
            </div>
            <div className="inline-flex">
              <Link
                to="abouthack"
                smooth={true}
                duration={500}
                className={`${activeLink === "abouthack"
                  ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                  : " text-white text-white-500"
                  } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick("abouthack")}
              >
                About Hack
              </Link>
            </div>
            <div className="inline-flex">
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className={`${activeLink === "faq"
                  ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                  : " text-white text-white-500"
                  } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick("faq")}
              >
                FAQ
              </Link>
            </div>
            <div className="inline-flex">
              <a
                href={`/team/${refNumber}`}
                className={`${activeLink === "team"
                  ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                  : " text-white text-white-500"
                  } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick("team")}
              >
                Team
              </a>
            </div>
          </div>
          <div className="flex-basis-1/2 mr-8">
            <a
              href='/register'
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
              }}
              className="inline-block text-xl px-4 py-2 leading-none border text-darkBlue bg-neoBlue mt-2 lg:mt-0 font-bold"
            >
              Register Now!
            </a>
          </div>
        </div>
      </nav>
      <div className={styles.container}>
        <div
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>HackBattle</h1>
          <p className={styles.subtitle}>
            Synthesize, Optimize, Materialize{" "}
          </p>
          <a

            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
            }}
            href='/register'
            className={styles.mainreg}
          >
            REGISTER NOW!
          </a>
          <a
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
            }}
            className={styles.mainregpinkbg}
            href='/register'
          >
            REGISTER NOW!
          </a>
          {/* <>inline-block text-4xl px-6 py-3 leading-tight tracking-tighter border text-darkBlue bg-neoBlue mt-2 lg:mt-20</> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
