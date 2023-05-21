import Verse from './Verse';

export default function Prayer({ prayer }: { prayer: Prayer }) {
  const { blurb, text, scripture } = prayer;

  return (
    <div className="pb-8">
      {blurb && <p className="text-center text-xl font-bold italic">{blurb}</p>}
      <p className="pl-2">{text}</p>
      {scripture?.map((x: any, i: number) => (
        <Verse verse={x} key={i} />
      ))}
    </div>
  );
}
