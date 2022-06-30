function DestinationTabs({ tab, setTab }) {
  return (
    <ul className="flex gap-7 justify-center desktop:justify-start tablet:gap-9">
      <TabList tab={tab} setTab={setTab} text="Moon" />
      <TabList tab={tab} setTab={setTab} text="Mars" />
      <TabList tab={tab} setTab={setTab} text="Europa" />
      <TabList tab={tab} setTab={setTab} text="Titan" />
    </ul>
  );
}

function TabList({ tab, setTab, text }) {
  const isActive = tab === text;

  return (
    <li>
      <button
        type="button"
        title={text}
        className={`uppercase text-tiny tracking-[2.7px] 
        border-b-4 pb-3 hover:border-white/50 transition-all 
        ${isActive ? 'border-white' : 'border-white/0 text-icy-plains'}`}
        onClick={() => setTab(text)}
      >
        {text}
      </button>
    </li>
  );
}

export default DestinationTabs;
