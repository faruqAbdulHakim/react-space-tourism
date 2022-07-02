import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect, useRef } from 'react';

function HomeContentText() {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.fromTo(
      text1.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.2,
      }
    );

    gsap.fromTo(
      text2.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.8,
      }
    );
    gsap.to(text3.current, {
      text: 'Let`s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we`ll give you a truly out of this world experience!',
      duration: 2,
      delay: 1.4,
    });
  }, []);
  return (
    <div className="max-w-[327px] tablet:max-w-[450px]">
      <p
        ref={text1}
        className="text-icy-plains uppercase 
        text-center text-tiny tablet:text-[20px] tracking-[2.7px] tablet:tracking-[3.38px]
        desktop:text-left desktop:text-lg desktop:tracking-[4.72px]"
      >
        So, you want to travel to
      </p>
      <h1
        ref={text2}
        className="text-[80px] tablet:text-4xl text-center desktop:text-left 
        font-serif uppercase"
      >
        Space
      </h1>
      <p
        ref={text3}
        className="text-icy-plains text-base leading-8 text-center desktop:text-left"
      ></p>
    </div>
  );
}

export default HomeContentText;
