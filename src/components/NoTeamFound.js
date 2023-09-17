import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const NoTeamFound = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <Navbar/>
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