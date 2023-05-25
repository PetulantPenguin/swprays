import quotes from '@/data/quotes';

export default function Quote({ quoteId }: { quoteId: number }) {
  const quote = quotes.find((x) => x.id === quoteId);

  if (!quote) {
    return null;
  }

  const { text, author, where, comment } = quote;

  return (
    <>
      <blockquote className="my-4 border-l-4 border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-500 dark:bg-yellow-800">
        {text}
        <div className="text-right text-base">
          {author && <div className="font-bold italic">{author}</div>}
          {where && <div className="italic">{where}</div>}
        </div>
      </blockquote>
      {comment && (
        <p className="mx-8 mb-8 border border-black p-2 text-center text-base">
          {comment}
        </p>
      )}
    </>
  );
}
