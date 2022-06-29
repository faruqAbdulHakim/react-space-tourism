import DefaultLayout from '../layouts/DefaultLayout';
import PageBgsObj from '../utils/PageBgObj';

const bgObject = PageBgsObj(
  '/assets/home/background-home-mobile.jpg',
  '/assets/home/background-home-tablet.jpg',
  '/assets/home/background-home-desktop.jpg'
);

function Home() {
  return (
    <DefaultLayout bgObject={bgObject}>
      <div>
        <h1>Home</h1>
      </div>
    </DefaultLayout>
  );
}

export default Home;
