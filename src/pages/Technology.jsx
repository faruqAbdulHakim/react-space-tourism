import DefaultLayout from '../layouts/DefaultLayout';
import PageBgsObj from '../utils/PageBgObj';

const bgObject = PageBgsObj(
  '/assets/technology/background-technology-mobile.jpg',
  '/assets/technology/background-technology-tablet.jpg',
  '/assets/technology/background-technology-desktop.jpg'
);

function Technology() {
  return <DefaultLayout bgObject={bgObject}>Technology</DefaultLayout>;
}

export default Technology;
