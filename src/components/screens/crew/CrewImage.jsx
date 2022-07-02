function CrewImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-60 tablet:h-[572px] desktop:h-[654px]"
    />
  );
}

export default CrewImage;
