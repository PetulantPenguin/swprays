function Verse({ verse }: { verse: any }) {
  const { text, reference } = verse;
  return (
    <blockquote>
      <span className="font-semibold">{reference}:</span>{' '}
      <span className="italic">{text}</span>
    </blockquote>
  );
}
export default function Prayer({ prayer }: { prayer: any }) {
  return (
    <div className="pb-8">
      <p className="bold text-center text-xl italic">{prayer.blurb}</p>
      <p className="pl-2">{prayer.text}</p>
      {prayer.scripture.map((x: any, i: number) => (
        <Verse verse={x} key={i} />
      ))}
    </div>
  );
}
