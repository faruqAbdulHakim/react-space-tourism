import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = () => setIsOpen((previousState) => !previousState);

  return (
    <>
      <ul
        className={`tablet:w-[450px] desktop:w-[830px] bg-white bg-opacity-5 backdrop-blur-2xl
        h-full
        flex flex-col tablet:flex-row 
        gap-8 tablet:gap-9 desktop:gap-14 
        tablet:items-center tablet:justify-center
        absolute right-0 top-0 px-14 pt-20
        tablet:static tablet:px-0 tablet:pt-0
        tablet:translate-y-0 tablet:opacity-100
        transition-all duration-500
        ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[100%] opacity-0'
        }`}
      >
        <NavList num="00" text="Home" link="/" />
        <NavList num="01" text="Destination" link="/destination" />
        <NavList num="02" text="Crew" link="/crew" />
        <NavList num="03" text="Technology" link="/technology" />
      </ul>
      <NavMenuButton isOpen={isOpen} onClick={menuToggleHandler} />
    </>
  );
}

function NavList({ num, text, link }) {
  const location = useLocation();
  const pathname = location.pathname;
  const isActive = link === pathname;

  return (
    <li className="text-tiny uppercase tablet:h-full relative">
      <a
        href={link}
        className={`h-full flex items-center tracking-[2.7px]
        tablet:after:h-1 after:content-[''] after:absolute after:w-full after:bottom-0 after:transition-all
        ${isActive ? 'after:bg-white' : 'hover:after:bg-white/50'}`}
      >
        <span className="font-serif font-bold mr-4 tablet:hidden desktop:inline">
          {num}
        </span>
        <span>{text}</span>
      </a>
    </li>
  );
}

function NavMenuButton({ isOpen, onClick }) {
  return (
    <button className="tablet:hidden absolute top-8 right-6" onClick={onClick}>
      <span
        className={`h-[3px] w-6 bg-icy-plains block transition-all rounded-full ${
          isOpen && 'rotate-45 translate-y-[7px]'
        }`}
      ></span>
      <span
        className={`h-[3px] w-6 bg-icy-plains block transition-all rounded-full mt-1 ${
          isOpen && 'opacity-0'
        }`}
      ></span>
      <span
        className={`h-[3px] w-6 bg-icy-plains block transition-all rounded-full mt-1 ${
          isOpen && '-rotate-45 -translate-y-[7px]'
        }`}
      ></span>
    </button>
  );
}

export default NavBar;
