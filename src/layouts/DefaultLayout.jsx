import AppBar from '../components/AppBar';

function DefaultLayout({ children, bgObject }) {
  return (
    <div
      style={bgObject}
      className="min-h-screen bg-no-repeat bg-cover bg-center bg-dark-blue text-white
      bg-[image:var(--bg-mobile)] tablet:bg-[image:var(--bg-tablet)] desktop:bg-[image:var(--bg-desktop)]"
    >
      <AppBar />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
