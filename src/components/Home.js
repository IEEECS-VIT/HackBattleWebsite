import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import backgroundImage from '../assets/background.png';
import bg1 from '../assets/backgroundmobile.png'
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
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const scrollUpByScreenHeight = () => {
    const screenHeight = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    setTimeout(() => {
      window.scrollBy({
        top: -screenHeight,
        behavior: 'smooth',
      });
    }, 800);
  };

  const navClasses = `lg:hidden ${
    isNavOpen ? "h-screen w-full" : "h-16"
  } transition-all ease-in-out duration-300`;
  const overlayClasses = `lg:hidden fixed left-0 w-full h-full bg-black opacity-50 ${
    isNavOpen ? "block" : "hidden"
  } z-40`;

  return (
    <div onClick={toggleNav}>
      <nav className={navClasses} style={{fontFamily:"Chakra Petch"}}>
        {!isNavOpen&&(<div className="block absolute right-6 top-6 lg:hidden mt-4 mb-4">
          <button
            className="flex items-center px-3 py-2 border rounded text-white-200 hover:text-neoBlue"
            onClick={toggleNav}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{color:"white",}}
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
)}
        {isNavOpen && (
          <div className="black text-white absolute top-0 left-0 h-screen w-screen p-4">
            <ul>
            <div className="block absolute right-6 top-6 lg:hidden mt-4 mb-4">
          <button
            className="flex items-center px-3 py-2 border rounded text-white-200 hover:text-neoBlue"
            onClick={toggleNav}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div><br></br>
            <div className="text-center mt-20 ">
              <Link
                to="/"
                smooth={true}
                duration={500}
                className={`${
                  activeLink === "home"
                    ? " text-neoBlue text-neoBlue-900"
                    : " text-white text-white-500"
                } cursor-pointer items-center px-1 pt-1 text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => {handleLinkClick("home");toggleNav();scrollUpByScreenHeight();}}
              >
                Home
              </Link>
            </div>
            <div className="text-center w-full my-10">
              <Link
                to="tracks"
                smooth={true}
                duration={500}
                className={`${
                  activeLink === "tracks"
                    ? " text-neoBlue text-neoBlue-900"
                    : " text-white text-white-500"
                } cursor-pointer items-center px-1 pt-1  text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => {toggleNav();handleLinkClick("tracks");scrollUpByScreenHeight();}}
              >
                Tracks
              </Link>
            </div>
            <div className="text-center w-full my-10">
              <Link
                to="prizes"
                smooth={true}
                duration={500}
                className={`${
                  activeLink === "prizes"
                    ? " text-neoBlue text-neoBlue-900"
                    : " text-white text-white-500"
                } cursor-pointer items-center px-1 pt-1  text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => {handleLinkClick("prizes");toggleNav();scrollUpByScreenHeight();}}
              >
                Prizes
              </Link>
            </div>
            <div className="text-center w-full my-10">
              <Link
                to="abouthack"
                smooth={true}
                duration={500}
                className={`${
                  activeLink === "abouthack"
                    ? " text-neoBlue text-neoBlue-900"
                    : " text-white text-white-500"
                } cursor-pointer items-center px-1 pt-1  text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => {handleLinkClick("abouthack");toggleNav();scrollUpByScreenHeight();}}
              >
                About Hack
              </Link>
            </div>
            <div className="text-center w-full my-10">
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className={`${
                  activeLink === "faq"
                    ? " text-neoBlue text-neoBlue-900"
                    : " text-white text-white-500"
                } cursor-pointer items-center px-1 pt-1 text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => {handleLinkClick("faq");toggleNav();}}
              >
                FAQ
              </Link>
            </div>
            <div className='flex justify-center'>
            <a
            
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
                fontFamily:"Chakra Petch",
                border:"1px solid #333",
                color:"black"
            }}
            href='/register'
            className="font-black text-black bg-[#00ffed] text-center text-3xl pt-3 pb-3 px-6 tracking-tighter mt-2  lg:text-4xl "
          >
            REGISTER NOW!
          </a>
            </div>
            </ul>
          </div>
        )}
      </nav>
      <div className={overlayClasses} onClick={toggleNav}></div>



      <nav className="hidden lg:flex lg:items-center lg:justify-between lg:flex-wrap bg-transparent-500 pr-8 pl-8 py-4 border-neoBlue border-neoBlue-400 border-b-2 z-10" style={{fontFamily:"Chakra Petch"}}>
        
        <div className="hidden lg:flex w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto">
          <div className="text-md flex w-1/2 justify-around pl-8 pr-6">
            <div className="inline-flex">
              <Link
                to="/"
                smooth={true}
                duration={500}
                className={`${
                  activeLink === "home"
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
                className={`${
                  activeLink === "tracks"
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
                className={`${
                  activeLink === "prizes"
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
                className={`${
                  activeLink === "abouthack"
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
                className={`${
                  activeLink === "faq"
                    ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                    : " text-white text-white-500"
                } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick("faq")}
              >
                FAQ
              </Link>
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
      <div className="relative w-full h-screen overflow-hidden">
      <div
          className="absolute left-0 w-full h-full bg-center-bottom bg-repeat-x brightness-100 top-72 lg:top-72"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      {/* <div
          className="lg:hidden ssm:absolute top-0 left-0 w-full h-full bg-center-bottom bg-repeat-x brightness-100"
          style={{ backgroundImage: `url(${bg1})`}}
        ></div> */}
        
          
          
        {/* <img src={backgroundImage} className="lg:absolute top-72 left-0 w-full h-auto bg-center-bottom bg-repeat-x brightness-100" ></img> */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white top-[20%] lg:top-[35%]" style={{textShadow:"0px 0px 0px 4px #000000"}}>
          <h1 className="mb-4 font-normal tracking-wide text-5xl leading-[2rem] sm:text-7xl md:text-8xl lg:text-8xl lg:leading-[6rem] 2xl:text-9xl" style={{fontFamily:"Jx Tabe Demo"}}>HackBattle</h1>
          <p className="text-2xl tracking-wider font-bold  capitalize lg:text-4xl" style={{fontFamily:"Chakra Petch",textShadow:"3px 1px 0px #000000"}}>
          Synthesize, Optimize, Materialize{" "}
          </p>
          <a
            
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
                fontFamily:"Chakra Petch",
                border:"1px solid #333",
                color:"black"
            }}
            href='/register'
            className=" absolute font-black text-black bg-[#00ffed] text-center text-3xl pt-3 pb-3 px-6 tracking-tighter mt-2  lg:text-4xl top-[205px] left-[45px] sm:top-[205px] sm:left-[120px]  md:top-[215px] md:left-[220px] lg:top-[250px] lg:left-[230px] xl:top-[250px] xl:left-[210px] 2xl:top-[250px] 2xl:left-[300px]"
          >
            REGISTER NOW!
          </a>
          {/* className=" absolute font-black text-black bg-[#00ffed] text-center text-3xl pt-3 pb-3 px-6 tracking-tighter mt-2  lg:text-4xl top-[205px] left-[45px] lg:top-[250px] lg:left-[300px]"*/}
          <a 
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
                fontFamily:"Chakra Petch",
                border:"1px solid #333",
                color:"black"
            }}
            className="absolute font-black text-black bg-[#eb0194] text-center text-3xl pt-3 pb-3 px-6 tracking-tighter mt-2 -z-10 top-[210px]  left-[40px]  sm:top-[210px] sm:left-[115px] md:top-[220px] md:left-[215px] lg:top-[255px] lg:left-[225px] xl:top-[255px] xl:left-[205px] 2xl:top-[255px] 2xl:left-[295px] lg:text-4xl"
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
