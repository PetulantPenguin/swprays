import Verse from './Verse';

export default function Prayer({ prayer }: { prayer: Prayer }) {
  const { blurb, text, scripture, where, commentary } = prayer;

  return (
    <div className="pb-8">
      {blurb && (
        <p className="mb-4 text-center text-base font-bold italic">{blurb}</p>
      )}
      <p className="pl-2">{text}</p>
      {scripture?.map((x: any, i: number) => (
        <Verse verse={x} key={i} />
      ))}
      {where && <p className="text-right italic">&mdash;{where}</p>}
      {commentary && <p className="italic">{commentary}</p>}
    </div>
  );
}
