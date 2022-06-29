import DefaultLayout from '../layouts/DefaultLayout';
import PageBgsObj from '../utils/PageBgObj';

const bgObject = PageBgsObj(
  '/assets/destination/background-destination-mobile.jpg',
  '/assets/destination/background-destination-tablet.jpg',
  '/assets/destination/background-destination-desktop.jpg'
);

function Destination() {
  return <DefaultLayout bgObject={bgObject}>Destination</DefaultLayout>;
}

export default Destination;
