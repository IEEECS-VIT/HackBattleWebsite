import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const NoTeamFound = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const [referenceNumber, setReferenceNumber] = useState('');

    useEffect(() => {
        setReferenceNumber(localStorage.getItem('refCode'));
    }, []);
    return (
        <>
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
                        <div className="inline-flex">
                            <Link
                                to="/"
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
                                to={`/team/${referenceNumber}`}
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
            <div className="px-2 md:px-10 flex flex-col items-center py-20">
                <h1 className="py-7 text-xl md:text-3xl font-bold tracking-widest text-neoBlue font-chakra">You are not part of a Team !</h1>
                <div className="flex-basis-1/2 py-10">
                    <a
                        href='/register'
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
                        }}
                        className="inline-block text-3xl px-4 py-2 leading-none border text-darkBlue bg-neoBlue mt-2 lg:mt-0 font-bold"
                    >
                        Register Now!
                    </a>
                </div>
            </div>
        </>
    )
}

export default NoTeamFound;