import DefaultLayout from '../layouts/DefaultLayout';
import PageBgsObj from '../utils/PageBgObj';
import HomeContentText from '../components/screens/home/HomeContentText';
import HomeCtaButton from '../components/screens/home/HomeCtaButton';

const bgObject = PageBgsObj(
  '/assets/home/background-home-mobile.jpg',
  '/assets/home/background-home-tablet.jpg',
  '/assets/home/background-home-desktop.jpg'
);

function Home() {
  return (
    <DefaultLayout bgObject={bgObject}>
      <div
        className="flex flex-col desktop:flex-row items-center pb-12
        gap-[81px] tablet:gap-[156px] 
        desktop:justify-between desktop:items-end 
        mx-6 tablet:mx-[159px] desktop:mx-[165px] mt-[106px] desktop:mt-60 desktop:gap-0"
      >
        <HomeContentText />
        <HomeCtaButton />
      </div>
    </DefaultLayout>
  );
}

export default Home;
