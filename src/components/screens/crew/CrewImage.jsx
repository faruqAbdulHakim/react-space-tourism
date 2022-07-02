import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function CrewImage({ src, alt }) {
  const img = useRef(null);

  useEffect(() => {
    gsap.fromTo(img.current, { opacity: 0 }, { opacity: 1, duration: 3 });
  }, [src]);

  return (
    <img
      ref={img}
      src={src}
      alt={alt}
      className="h-60 tablet:h-[572px] desktop:h-[654px]"
    />
  );
}

export default CrewImage;
