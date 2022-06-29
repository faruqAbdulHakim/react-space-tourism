import NavBar from './NavBar';

function AppBar() {
  return (
    <div className="desktop:pt-10 pl-[35px] desktop:pl-[55px]">
      <div className="h-24 flex items-center justify-between">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
          height={48}
          width={48}
          className="desktop:mr-12"
        />
        <span className="flex-1 bg-white/25 h-[1px] translate-x-10 z-10 hidden desktop:block"></span>
        <NavBar />
      </div>
    </div>
  );
}

export default AppBar;
