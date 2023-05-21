export default function Verse({ verse }: { verse: any }) {
  const { text, reference } = verse;
  return (
    <blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
      <span className="font-semibold">{reference}:</span>{' '}
      <span className="italic">{text}</span>
    </blockquote>
  );
}
