import Verse from './Verse';

export default function Prayer({ prayer }: { prayer: Prayer }) {
  const { blurb, text, scripture, where, commentary, intro } = prayer;

  return (
    <div className="pb-8">
      {intro && <p className="m-2 border p-2 text-base italic">{intro}</p>}
      {blurb && (
        <p className="mb-4 text-center text-base font-bold italic">{blurb}</p>
      )}
      {text}
      {scripture?.map((x: any, i: number) => (
        <Verse verse={x} key={i} />
      ))}
      {where && <p className="text-right italic">&mdash;{where}</p>}
      {commentary && (
        <p className="m-2 border p-2 text-base italic">{commentary}</p>
      )}
    </div>
  );
}
