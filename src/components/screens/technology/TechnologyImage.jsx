import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const imgPath = {
  1: {
    desktop: '/assets/technology/image-launch-vehicle-portrait.jpg',
    tablet: '/assets/technology/image-launch-vehicle-landscape.jpg',
    mobile: '/assets/technology/image-launch-vehicle-landscape.jpg',
  },
  2: {
    desktop: '/assets/technology/image-spaceport-portrait.jpg',
    tablet: '/assets/technology/image-spaceport-landscape.jpg',
    mobile: '/assets/technology/image-spaceport-landscape.jpg',
  },
  3: {
    desktop: '/assets/technology/image-space-capsule-portrait.jpg',
    tablet: '/assets/technology/image-space-capsule-landscape.jpg',
    mobile: '/assets/technology/image-space-capsule-landscape.jpg',
  },
};

function TechnologyImage({ slide }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const updateImgSrc = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1440) {
        imgRef.current.src = imgPath[slide].desktop;
      } else if (windowWidth > 768) {
        imgRef.current.src = imgPath[slide].tablet;
      } else {
        imgRef.current.src = imgPath[slide].mobile;
      }
    };
    updateImgSrc();
    window.onresize = () => {
      updateImgSrc();
    };

    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 3,
      }
    );
  }, [slide]);

  return (
    <img
      ref={imgRef}
      alt="technology"
      className="w-screen desktop:w-auto origin-right"
    />
  );
}

export default TechnologyImage;
