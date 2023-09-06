import React, {useRef} from 'react';
import '../styles/AboutHack.css'
import useIntersection from "./useIntersection";

const AboutHack = () => {

    const ref1 = useRef();
    const inViewport1 = useIntersection(ref1, '0px'); // Trigger as soon as the element becomes visible
    const inViewport2 = useIntersection(ref1, '-200px'); // Trigger if 200px is visible from the element

    // if (inViewport1) {
    //     console.log('in viewport:', ref1.current);
    // }
    if (inViewport2) {
        console.log('in viewport:', ref1.current);
    }

    return (
        <div>
            <div ref={ref1}>
                <svg className='ab-hack-svg' width="1300px" viewBox="0 0 1329 663" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={ inViewport2? 'path' : 'no-path'} stroke="#FF009E" strokeWidth="1.5" d="M1205 505a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                    <path className={ inViewport2? 'path' : 'no-path'} stroke="#FF009E" strokeWidth="1.5" d="M1191 532a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                    <path className={ inViewport2? 'path' : 'no-path'} stroke="#FF009E" strokeWidth="1.5" d="M1318 516a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                    <path className={ inViewport2? 'path' : 'no-path'} d="M1045.5 288H1267V443V476.5M1267 476.5V486.5M1267 476.5L1214 503.5M1267 486.5V494.5L1200 530M1267 486.5L1318.5 513" stroke="#FF009E" strokeWidth="1.5" />
                    <path className={ inViewport2? 'path' : 'no-path'} d="M1 0V117.5H142.5V289.5M142.5 289.5V518.5H720.5V662.5M142.5 289.5H447.5" stroke="#FF009E" strokeWidth="1.5" />
                </svg>
            </div>

        <div className="AboutHack flex h-screen items-center justify-center -mt-14">
                <div style={{clipPath:'polygon(5% 0,100% 0,100% 90%,55% 90%,50% 100%, 0 100%,0 10%)'}} className="relative w-3/5 h-2/5 bg-neoBlue">
                <div style={{clipPath:'polygon(5% 0,100% 0,100% 90%,55% 90%,50% 100%, 0 100%,0 10%)'}} className="absolute top-0.5 bottom-0.5 right-0.5 left-0.5 bg-darkBlue">
                <div style={{clipPath:'polygon(5% 0,100% 0,90% 100%,0 100%)'}} className="top-0 left-0 w-1/3 bg-neoBlue text-darkBlue items-center justify-center flex font-chakra font-extrabold text-xl">
                About Hack-a-delic
            </div>
                    <div style={{clipPath:'polygon(0 0,100% 0,100% 90%,80% 90%,70% 100%,0 100%)'}} className="p-4 inline-block text-white font-medium font-chakra text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos repellat autem quis. 
                        Nisi deserunt pariatur, commodi necessi-tatibus mollitia et! Quidem totam hic molestiae maxime 
                        saepe dolore doloribus, magnam laboriosam, repellat, temporibus iste illo eligendi? Dolore illo 
                        beatae quod reiciendis vero totam odio nobis perferendis impedit. Quo blanditiis illo ab reiciendis 
                        praesentium corrupti, ipsum labore eaque minus nemo dignissimos fugit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem doloremque perspiciatis rerum 
                        dignissimos officia et sapiente eos nostrum? Sit provident modi magnam fuga delectus praesentium, 
                        reiciendis, molestias aliquid unde maiores velit quibusdam cupiditate repellat ratione doloribus ad
                        cumque maxime iste ducimus? Id beatae sequi ratione a ut, numquam placeat obc
                        aecati quam consectetur laborum debitis sapiente tenetur suscipit blanditiis aut.
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHack;