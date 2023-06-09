import biblePrayers from '@/data/biblePrayers';

import Verse from './Verse';

function BiblePrayerFormat({ prayer }: { prayer?: Prayer }) {
  if (!prayer) {
    return null;
  }
  const { blurb, text, scripture, commentary, intro } = prayer;
  return (
    <div className="pb-8">
      {intro && <div className="text-base">{intro}</div>}
      {text && <div className="pl-2">{text}</div>}
      {scripture?.map((x: any, i: number) => (
        <Verse verse={x} key={i} />
      ))}
      {blurb && <p className="text-xl font-bold italic">{blurb}</p>}
      {commentary && <div className="text-base">{commentary}</div>}
    </div>
  );
}

export default function BiblePrayer({ prayer }: { prayer: Prayer | number }) {
  let thePrayer: Prayer | undefined;
  if (typeof prayer === 'number') {
    thePrayer = biblePrayers.find((x) => x.id === prayer) as Prayer;
  } else {
    thePrayer = prayer as Prayer;
  }
  if (!thePrayer) {
    return null;
  }
  return <BiblePrayerFormat prayer={thePrayer} />;
}
