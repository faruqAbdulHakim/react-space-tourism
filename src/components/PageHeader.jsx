import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function PageHeader({ num, text }) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="tablet:mx-9 desktop:mx-40 mt-6 tablet:mt-10 desktop:mt-[76px]">
      <h1
        className="text-tiny tablet:text-[20px] desktop:text-lg 
        tracking-[2.7px] tablet:tracking-[3.38px] desktop:tracking-[4.72px] 
        uppercase text-center tablet:text-left"
      >
        <span className="font-bold opacity-25 mr-4 desktop:mr-7">{num}</span>
        <span ref={textRef}>{text}</span>
      </h1>
    </div>
  );
}

export default PageHeader;
