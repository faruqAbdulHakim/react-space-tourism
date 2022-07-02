function TechnologySlide({ setSlide, slide }) {
  return (
    <ol className="flex desktop:flex-col gap-4 desktop:gap-8">
      <Button setSlide={setSlide} slide={slide} text="1" />
      <Button setSlide={setSlide} slide={slide} text="2" />
      <Button setSlide={setSlide} slide={slide} text="3" />
    </ol>
  );
}

function Button({ setSlide, slide, text }) {
  const isActive = slide === text;
  return (
    <li className="leading-9">
      <button
        className={`w-10 h-10 tablet:w-14 tablet:h-14 desktop:w-20 desktop:h-20
        border rounded-full hover:border-white text-tiny tablet:text-lg desktop:text-xl font-serif
        duration-500
        transition-all 
        ${
          isActive ? 'border-white bg-white text-dark-blue' : 'border-white/25'
        }`}
        onClick={() => setSlide(text)}
      >
        {text}
      </button>
    </li>
  );
}

export default TechnologySlide;
