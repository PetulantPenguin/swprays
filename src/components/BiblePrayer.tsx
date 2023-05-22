import Verse from './Verse';

export default function BiblePrayer({ prayer }: { prayer: Prayer }) {
  const { blurb, text, scripture, commentary } = prayer;

  return (
    <div className="pb-8">
      <p className="pl-2">{text}</p>
      {scripture?.map((x: any, i: number) => (
        <Verse verse={x} key={i} />
      ))}
      {blurb && <p className="text-xl font-bold italic">{blurb}</p>}
      {commentary && <p className="text-base">{commentary}</p>}
    </div>
  );
}
