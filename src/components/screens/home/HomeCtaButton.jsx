import { gsap, Power3 } from 'gsap';
import { useEffect, useRef } from 'react';

function HomeCtaButton() {
  const button = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      button.current,
      {
        y: 10,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 1, delay: 2.4, ease: Power3.easeInOut }
    );
  }, []);

  return (
    <button
      ref={button}
      className="bg-white text-dark-blue rounded-full opacity-0
      w-[150px] h-[150px] tablet:w-[274px] tablet:h-[274px] 
      text-[20px] tablet:text-xl uppercase tracking-widest font-serif
      shadow-[0_0_0_44px_rgba(255,255,255,0)] hover:shadow-[0_0_0_88px_rgba(255,255,255,.1)] 
      active:shadow-[0_0_0_99px_rgba(255,255,255,.15)] 
      transition-all"
    >
      Explore
    </button>
  );
}

export default HomeCtaButton;
