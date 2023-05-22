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
  function lastDayInMonth(m: number) {
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
    day === 1
      ? `${month - 1}/${lastDayInMonth(month - 1)}`
      : `${month}/${day - 1}`;
  const tomorrow =
    day === lastDayInMonth(month)
      ? `${month + 1}/1`
      : `${month}/${Number(day) + 1}`;

  return (
    <nav className="grid gap-y-2 pb-8">
      <div className="col-span-full flex">
        {yesterday !== '5/20' ? (
          <Link
            href={`/prayer/${yesterday}/${session}`}
            className="grow border text-center leading-8"
          >
            ◀ Previous
          </Link>
        ) : null}
        <Link
          href={`/prayer/${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${session}`}
          className="grow border text-center leading-8"
        >
          Today
        </Link>
        {tomorrow !== '5/23' ? (
          <Link
            href={`/prayer/${tomorrow}/${session}`}
            className="grow border text-center align-middle leading-8"
          >
            Next ▶
          </Link>
        ) : null}
      </div>
      <div className="flex">
        <Link
          href={`/prayer/${month}/${day}/morning`}
          className="grow border text-center leading-8"
        >
          ☀️ Morning
        </Link>
        <Link
          href={`/prayer/${month}/${day}/evening`}
          className="grow border text-center leading-8"
        >
          Evening 🌙
        </Link>
      </div>
    </nav>
  );
}
