function CrewSlide({ slide, onChange }) {
  return (
    <div className="flex gap-6">
      <Button slide={slide} value={0} onChange={onChange} />
      <Button slide={slide} value={1} onChange={onChange} />
      <Button slide={slide} value={2} onChange={onChange} />
      <Button slide={slide} value={3} onChange={onChange} />
    </div>
  );
}

function Button({ value, slide, onChange }) {
  const isActive = value === slide;
  return (
    <button
      className="w-[10px] h-[10px] desktop:w-4 desktop:h-4 rounded-full bg-white/20 hover:bg-white/50 disabled:bg-white transition-all"
      onClick={onChange.bind(this)}
      value={value}
      disabled={isActive}
    ></button>
  );
}

export default CrewSlide;
