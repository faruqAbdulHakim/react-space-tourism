import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import TechnologyImage from './TechnologyImage';
import TechnologySlide from './TechnologySlide';

const technologyData = {
  1: {
    title: 'Launch vehicle',
    text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry 
      a payload from Earth's surface to space, usually to Earth orbit or beyond. 
      Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
      it's quite an awe-inspiring sight on the launch pad!`,
  },
  2: {
    title: 'Spaceport',
    text: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
      by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, 
      our spaceport is ideally situated to take advantage of the Earth\`s rotation for launch.`,
  },
  3: {
    title: 'Space Capsule',
    text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter 
      the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight.
      It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
  },
};

function TechnologyContent() {
  const [slide, setSlide] = useState('1');

  const text1 = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(text1.current, {
      text: technologyData[slide].title,
      duration: 1,
    });
    gsap.to(text2.current, {
      text: technologyData[slide].text,
      duration: 1,
      delay: 0.5,
    });
  }, [slide]);

  return (
    <div className="mt-8 tablet:mt-14 desktop:mt-6 pb-20 flex flex-col desktop:flex-row items-center">
      <div className="desktop:order-3">
        <TechnologyImage slide={slide} />
      </div>

      <div className="desktop:order-1 mt-8 desktop:mt-0 mb-4 tablet:mb-11 desktop:mb-0 desktop:ml-[165px]">
        <TechnologySlide slide={slide} setSlide={setSlide} />
      </div>

      <div className="desktop:order-2 flex-1 desktop:ml-20 text-center desktop:text-left">
        <p className="text-sm tablet:text-tiny uppercase tracking-[2.7px] text-icy-plains">
          The terminology...
        </p>
        <h2
          ref={text1}
          className="text-[24px] tablet:text-[40px] desktop:text-2xl uppercase font-serif mt-2"
        >
          {' '}
        </h2>
        <p
          ref={text2}
          className="text-icy-plains max-w-[458px] desktop:max-w-[444px] leading-8 
          text-tiny desktop:text-base mx-4 desktop:mx-0 mt-4"
        ></p>
      </div>
    </div>
  );
}

export default TechnologyContent;
