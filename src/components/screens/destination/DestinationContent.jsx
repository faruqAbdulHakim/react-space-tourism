import { useState } from 'react';

import DestinationTabs from './DestinationTabs';
import DestinationImage from './DestinationImage';

const destinationData = {
  Moon: {
    text: `See our planet as you\`ve never seen it before.
      A perfect relaxing trip away to help regain perspective and come back refreshed.
      While you\`re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: '384,400 KM',
    travelTime: '3 Days',
  },
  Mars: {
    text: `Don\`t forget to pack your hiking boots.
      You\`ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.
      It\`s two and a half times the size of Everest!`,
    distance: '225 MIL. KM',
    travelTime: '9 Months',
  },
  Europa: {
    text: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\`s dream. 
      With an icy surface, it\`s perfect for a bit of ice skating, curling, hockey, or simple 
      relaxation in your snug wintery cabin.`,
    distance: '628 MIL. KM',
    travelTime: '3 Years',
  },
  Titan: {
    text: `The only moon known to have a dense atmosphere other than Earth, 
      Titan is a home away from home (just a few hundred degrees colder!). 
      As a bonus, you get striking views of the Rings of Saturn.`,
    distance: '1.6 BIL. km',
    travelTime: '7 Years',
  },
};

function DestinationContent() {
  const [tab, setTab] = useState('Moon');
  return (
    <div
      className="flex flex-col desktop:flex-row
      items-center desktop:items-start
      desktop:justify-around
      gap-6 tablet:gap-12 desktop:gap-40
      mt-8 tablet:mt-16
      mx-6 desktop:mx-40
      pb-14"
    >
      <DestinationImage destination={tab} />
      <div className="max-w-[400px] tablet:max-w-[573px] desktop:max-w-[445px]">
        <DestinationTabs tab={tab} setTab={setTab} />
        <h1
          className="font-serif text-[80px] desktop:text-3xl uppercase text-center desktop:text-left 
          mt-5 tablet:mt-8 desktop:mt-9"
        >
          {tab}
        </h1>
        <p className="text-base text-center desktop:text-left text-icy-plains">
          {destinationData[tab].text}
        </p>

        <hr
          className="border-white/25
          mt-8 tablet:mt-12 desktop:mt-14 
          mb-8 tablet:mb-7"
        />

        <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-0 text-center desktop:text-left">
          <div className="flex-1">
            <h2 className="text-sm text-icy-plains uppercase tracking-[2.36px]">
              Avg. Distance
            </h2>
            <p className="text-lg uppercase font-serif mt-3">
              {destinationData[tab].distance}
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-sm text-icy-plains uppercase tracking-[2.36px]">
              Est. Travel Time
            </h2>
            <p className="text-lg uppercase font-serif mt-3">
              {destinationData[tab].travelTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationContent;
