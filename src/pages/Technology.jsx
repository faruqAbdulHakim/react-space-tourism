import PageHeader from '../components/PageHeader';
import TechnologyContent from '../components/screens/technology/TechnologyContent';
import DefaultLayout from '../layouts/DefaultLayout';
import PageBgsObj from '../utils/PageBgObj';

const bgObject = PageBgsObj(
  '/assets/technology/background-technology-mobile.jpg',
  '/assets/technology/background-technology-tablet.jpg',
  '/assets/technology/background-technology-desktop.jpg'
);

function Technology() {
  return (
    <DefaultLayout bgObject={bgObject}>
      <PageHeader num="03" text="Space launch 101" />
      <TechnologyContent />
    </DefaultLayout>
  );
}

export default Technology;
