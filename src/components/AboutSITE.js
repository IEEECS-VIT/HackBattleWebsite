import React from 'react';

const AboutSITE = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div
        style={{
          clipPath:
            'polygon(5% 0,100% 0,100% 90%,55% 90%,50% 100%, 0 100%,0 10%)',
        }}
        className='relative w-3/5 h-2/5 bg-neoBlue'
      >
        <div
          style={{
            clipPath:
              'polygon(5% 0,100% 0,100% 90%,55% 90%,50% 100%, 0 100%,0 10%)',
          }}
          className='relative top-0.5 bottom-0.5 right-0.5 left-0.5 bg-darkBlue'
        >
          <div
            style={{ clipPath: 'polygon(5% 0,100% 0,90% 100%,0 100%)' }}
            className='top-0 left-0 w-1/3 bg-neoBlue text-darkBlue items-center justify-center flex font-chakra font-extrabold text-xl'
          >
            About SITE
          </div>
          <div
            style={{
              clipPath: 'polygon(0 0,100% 0,100% 90%,80% 90%,70% 100%,0 100%)',
            }}
            className='p-4 inline-block text-white font-medium font-chakra text-base'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos
            repellat autem quis. Nisi deserunt pariatur, commodi necessitatibus
            mollitia et! Quidem totam hic molestiae maxime saepe dolore
            doloribus, magnam laboriosam, repellat, temporibus iste illo
            eligendi? Dolore illo beatae quod reiciendis vero totam odio nobis
            perferendis impedit. Quo blanditiis illo ab reiciendis praesentium
            corrupti, ipsum labore eaque minus nemo dignissimos fugit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint quidem
            doloremque perspiciatis rerum dignissimos officia et sapiente eos
            nostrum? Sit provident modi magnam fuga delectus praesentium,
            reiciendis, molestias aliquid unde maiores velit quibusdam
            cupiditate repellat ratione doloribus ad cumque maxime iste ducimus?
            Id beatae sequi ratione a ut, numquam placeat obc aecati quam
            consectetur laborum debitis sapiente tenetur suscipit blanditiis
            aut.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSITE;
