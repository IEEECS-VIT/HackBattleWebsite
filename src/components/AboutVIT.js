import React from 'react';
import VIT from '../assets/VIT.png';

const AboutVIT = () => {
    return (
            <div className="flex h-screen items-center justify-center">
            <div style={{clipPath:'polygon(5% 0,100% 0,100% 90%,55% 90%,50% 100%, 0 100%,0 7%)'}} className="relative w-3/5 h-4/5 bg-neoBlue">
            <div style={{clipPath:'polygon(5% 0,100% 0,100% 90%,55% 90%,50% 100%, 0 100%,0 7%)'}} className="absolute top-0.5 bottom-0.5 right-0.5 left-0.5 bg-darkBlue">
            <div style={{clipPath:'polygon(5% 0,100% 0,90% 100%,0 100%)'}} className="top-0 left-0 w-1/3 h-7% bg-neoBlue text-darkBlue items-center justify-center flex font-chakra font-bold text-xl uppercase">
                    About VIT, Vellore
                </div>
                <div className="flex flex-col justify-evenly my-4 mx-8 md:flex-row">
                    <img className="h-96 w-full object-cover md:h-auto md:w-58"
                        src={VIT}
                        alt="" 
                    />
                    <div className=" flex flex-col justify-start p-6">
                        <p className="mb-4 text-white font-medium font-chakra text-base">
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        Lorem 

                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        LoremLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem
                        
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem
                        </p>
                    </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default AboutVIT;