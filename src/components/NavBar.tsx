import Link from 'next/link';

export default function NavBar({
  month,
  day,
  session,
}: {
  month: number;
  day: number;
  session: string;
}) {
  function lastDayInMonth(m: number): number {
    switch (m) {
      case 2:
        return 28;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      default:
        return 30;
    }
  }

  const yesterday =
    Number(day) === 1
      ? `${Number(month) - 1}/${lastDayInMonth(Number(month) - 1)}`
      : `${month}/${day - 1}`;

  const tomorrow =
    Number(day) === lastDayInMonth(Number(month))
      ? `${Number(month) + 1}/1`
      : `${month}/${Number(day) + 1}`;

  return (
    <nav className="grid gap-y-2 pb-8">
      <div className="col-span-full flex">
        {yesterday !== '5/20' ? (
          <Link
            href={`/prayer/${yesterday}/${session}`}
            className="grow border text-center leading-10"
          >
            ◀ Previous
          </Link>
        ) : null}
        <Link
          href={`/prayer/${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${session}`}
          className="grow border text-center leading-10"
        >
          Today
        </Link>
        {tomorrow !== '6/6' ? (
          <Link
            href={`/prayer/${tomorrow}/${session}`}
            className="grow border text-center align-middle leading-10"
          >
            Next ▶
          </Link>
        ) : null}
      </div>
      <div className="flex">
        <Link
          href={`/prayer/${month}/${day}/morning`}
          className="grow border text-center leading-10"
        >
          ☀️ Morning
        </Link>
        <Link
          href={`/prayer/${month}/${day}/evening`}
          className="grow border text-center leading-10"
        >
          Evening 🌙
        </Link>
      </div>
    </nav>
  );
}
