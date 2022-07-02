import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import CrewImage from './CrewImage';
import CrewSlide from './CrewSlide';

const crews = [
  {
    position: 'Commander',
    name: 'Douglas Hurley',
    text: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    imgPath: '/assets/crew/image-douglas-hurley.webp',
  },
  {
    position: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    text: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    imgPath: '/assets/crew/image-mark-shuttleworth.webp',
  },
  {
    position: 'Pilot',
    name: 'Victor Glover',
    text: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    imgPath: '/assets/crew/image-victor-glover.webp',
  },
  {
    position: 'Flight Engineer',
    name: 'Anousheh Ansari',
    text: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    imgPath: '/assets/crew/image-anousheh-ansari.webp',
  },
];

function CrewContent() {
  const [slide, setSlide] = useState(0);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(text1.current, {
      text: crews[slide].position,
      duration: 0.5,
    });
    gsap.to(text2.current, {
      text: crews[slide].name,
      duration: 0.5,
      delay: 0.2,
    });
    gsap.to(text3.current, {
      text: crews[slide].text,
      duration: 1,
      delay: 0.4,
    });
  }, [slide]);

  const changeSlideHandler = ({ target }) => {
    setSlide(parseInt(target.value));
  };

  return (
    <div className="flex flex-col desktop:flex-row justify-between mx-6 tablet:mx-40">
      <div className="order-2 tablet:order-1 self-center mt-8 tablet:mt-14 desktop:mt-0 text-center desktop:text-left flex flex-col gap-8 tablet:gap-10 desktop:gap-32 pb-20 tablet:pb-0">
        <div className="order-2 tablet:order-1">
          <p
            ref={text1}
            className="text-white/50 text-tiny tablet:text-lg desktop:text-xl font-serif uppercase"
          ></p>
          <h2
            ref={text2}
            className="mt-2 desktop:mt-4 text-lg tablet:text-[40px] desktop:text-2xl font-serif uppercase"
          >
            {' '}
          </h2>
          <p
            ref={text3}
            className="text-icy-plains mt-4 desktop:mt-6 text-tiny desktop:text-base max-w-[444px]"
          ></p>
        </div>
        <div className="order-1 tablet:order-2 flex justify-center desktop:justify-start">
          <CrewSlide slide={slide} onChange={changeSlideHandler} />
        </div>
      </div>

      <div className="order-1 tablet:order-2 self-center desktop:self-end mt-10 desktop:mt-0">
        <CrewImage src={crews[slide].imgPath} alt={crews[slide].name} />
        <hr className="border-white/25" />
      </div>
    </div>
  );
}

export default CrewContent;
