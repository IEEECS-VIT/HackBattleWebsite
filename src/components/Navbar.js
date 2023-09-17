// Uses React-Router DONT USE IN HOME PAGE
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logohome from '../assets/navbar_logo_home.png'
import logonav from '../assets/navbar_logo_navbar.png'
const Navbar = () => {
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
        const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        setTimeout(() => {
            window.scrollBy({
                top: -screenHeight,
                behavior: 'smooth',
            });
        }, 800);
    };

    const navClasses = `lg:hidden ${isNavOpen ? "h-screen w-full" : "h-16"
        } transition-all ease-in-out duration-300`;
    const overlayClasses = `lg:hidden fixed left-0 w-full h-full bg-black opacity-50 ${isNavOpen ? "block" : "hidden"
        } z-40`;

    return (
        <div onClick={toggleNav}>
            <nav className={navClasses} style={{ fontFamily: "Chakra Petch" }}>
                {!isNavOpen && (<div className="block absolute right-6 top-6 lg:hidden mt-4 mb-4">
                    <button
                        className="flex items-center px-3 py-2 rounded text-white-200 hover:text-neoBlue"
                        onClick={toggleNav}
                    >
                        <img src={logohome} className='fill-current h-12 w-12'></img>
                    </button>
                </div>
                )}
                {isNavOpen && (
                    <div className="black text-white absolute top-0 left-0 h-screen w-screen p-4">
                        <ul>
                            <div className="block absolute right-6 top-6 lg:hidden mt-4 mb-4">
                                <button
                                    className="flex items-center px-3 py-2 rounded text-white-200 hover:text-neoBlue"
                                    onClick={toggleNav}
                                >
                                    <img src={logonav} className='fill-current h-12 w-12'></img>
                                </button>
                            </div><br></br>
                            <div className="text-center mt-20 ">
                                <Link
                                    to="/"
                                    smooth={true}
                                    duration={500}
                                    className={`${activeLink === "home"
                                        ? " text-neoBlue text-neoBlue-900"
                                        : " text-white text-white-500"
                                        } cursor-pointer items-center px-1 pt-1 text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                    onClick={() => { handleLinkClick("home"); toggleNav(); scrollUpByScreenHeight(); }}
                                >
                                    Home
                                </Link>
                            </div>
                            <div className="text-center w-full my-10">
                                <Link
                                    to="/"
                                    smooth={true}
                                    duration={500}
                                    className={`${activeLink === "tracks"
                                        ? " text-neoBlue text-neoBlue-900"
                                        : " text-white text-white-500"
                                        } cursor-pointer items-center px-1 pt-1  text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                    onClick={() => { toggleNav(); handleLinkClick("tracks"); scrollUpByScreenHeight(); }}
                                >
                                    Tracks
                                </Link>
                            </div>
                            {/* <div className="text-center w-full my-10">
                                <Link
                                    to="/"
                                    smooth={true}
                                    duration={500}
                                    className={`${activeLink === "prizes"
                                        ? " text-neoBlue text-neoBlue-900"
                                        : " text-white text-white-500"
                                        } cursor-pointer items-center px-1 pt-1  text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                    onClick={() => { handleLinkClick("prizes"); toggleNav(); scrollUpByScreenHeight(); }}
                                >
                                    Prizes
                                </Link>
                            </div> */}
                            <div className="text-center w-full my-10">
                                <Link
                                    to="/"
                                    smooth={true}
                                    duration={500}
                                    className={`${activeLink === "abouthack"
                                        ? " text-neoBlue text-neoBlue-900"
                                        : " text-white text-white-500"
                                        } cursor-pointer items-center px-1 pt-1  text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                    onClick={() => { handleLinkClick("abouthack"); toggleNav(); scrollUpByScreenHeight(); }}
                                >
                                    About Hack
                                </Link>
                            </div>
                            <div className="text-center w-full my-10">
                                <Link
                                    to="/"
                                    smooth={true}
                                    duration={500}
                                    className={`${activeLink === "faq"
                                        ? " text-neoBlue text-neoBlue-900"
                                        : " text-white text-white-500"
                                        } cursor-pointer items-center px-1 pt-1 text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                    onClick={() => { handleLinkClick("faq"); toggleNav(); }}
                                >
                                    FAQ
                                </Link>
                            </div>
                            <div className="text-center w-full my-10">
                                <Link
                                    to={`/team/${refNumber}`}
                                    smooth={true}
                                    duration={500}
                                    className={`${activeLink === "team"
                                        ? " text-neoBlue text-neoBlue-900"
                                        : " text-white text-white-500"
                                        } cursor-pointer items-center px-1 pt-1 text-xl font-bold block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                    onClick={() => { handleLinkClick("team"); toggleNav(); }}
                                >
                                    Team
                                </Link>
                            </div>
                            <div className='flex justify-center'>
                                <a

                                    style={{
                                        clipPath:
                                            "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
                                        fontFamily: "Chakra Petch",
                                        border: "1px solid #333",
                                        color: "black"
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



            <nav className="hidden lg:flex lg:items-center lg:justify-between lg:flex-wrap bg-transparent-500 pr-8 pl-8 py-4 border-neoBlue border-neoBlue-400 border-b-2 z-10" style={{ fontFamily: "Chakra Petch" }}>

                <div className="hidden lg:flex w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto">
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
                                to="/"
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
                        {/* <div className="inline-flex">
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
                        </div> */}
                        <div className="inline-flex">
                            <Link
                                to="/"
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
                                to="/"
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
                            <Link
                                to={`/team/${refNumber}`}
                                smooth={true}
                                duration={500}
                                className={`${activeLink === "team"
                                    ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                                    : " text-white text-white-500"
                                    } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                onClick={() => handleLinkClick("team")}
                            >
                                Team
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
        </div>
    )
};

export default Navbar;