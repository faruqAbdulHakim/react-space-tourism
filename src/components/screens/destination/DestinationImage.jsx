const imgPath = {
  Moon: '/assets/destination/image-moon.webp',
  Mars: '/assets/destination/image-mars.webp',
  Europa: '/assets/destination/image-europa.webp',
  Titan: '/assets/destination/image-titan.webp',
};

function DestinationImage({ destination }) {
  return (
    <img
      src={imgPath[destination]}
      alt={destination}
      className="w-[170px] tablet:w-[300px] desktop:w-[445px]"
    />
  );
}

export default DestinationImage;
