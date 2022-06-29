import DefaultLayout from '../layouts/DefaultLayout';
import PageBgsObj from '../utils/PageBgObj';

const bgObject = PageBgsObj(
  '/assets/crew/background-crew-mobile.jpg',
  '/assets/crew/background-crew-tablet.jpg',
  '/assets/crew/background-crew-desktop.jpg'
);

function Crew() {
  return <DefaultLayout bgObject={bgObject}>Crew</DefaultLayout>;
}

export default Crew;
