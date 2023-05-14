function Verse({ verse }: { verse: any }) {
  const { text, reference } = verse;
  return (
    <div>
      <p>{text}</p>
      <div className="text-right font-bold">&mdash;{reference}</div>
    </div>
  );
}
export default function Prayer({ prayer }: { prayer: any }) {
  return (
    <div className="pb-8">
      <h2 className="text-2xl font-bold">{prayer.title}</h2>
      <p className="text-center text-base italic">{prayer.blurb}</p>
      <p className="pl-2">{prayer.text}</p>
      {prayer.scripture.map((x: any, i: number) => (
        <Verse verse={x} key={i} />
      ))}
    </div>
  );
}
