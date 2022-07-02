import PageHeader from '../components/PageHeader';
import CrewContent from '../components/screens/crew/CrewContent';
import DefaultLayout from '../layouts/DefaultLayout';
import PageBgsObj from '../utils/PageBgObj';

const bgObject = PageBgsObj(
  '/assets/crew/background-crew-mobile.jpg',
  '/assets/crew/background-crew-tablet.jpg',
  '/assets/crew/background-crew-desktop.jpg'
);

function Crew() {
  return (
    <DefaultLayout bgObject={bgObject}>
      <PageHeader num="02" text="Meet your crew" />
      <CrewContent />
    </DefaultLayout>
  );
}

export default Crew;
