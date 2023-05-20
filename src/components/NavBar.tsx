import Link from 'next/link';

export default function NavBar({
  month,
  day,
  session,
}: {
  month: string;
  day: string;
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

  const tomorrow =
    Number(day) === lastDayInMonth(Number(month))
      ? `${Number(month) + 1}/1`
      : `${month}/${Number(day) + 1}`;
  const yesterday =
    Number(day) === 1
      ? `${Number(month) - 1}/${lastDayInMonth(Number(month) - 1)}`
      : `${month}/${Number(day) + 1}`;

  return (
    <nav className="grid grid-cols-6 justify-center gap-y-2 pb-8">
      <Link
        href={`/prayer/${yesterday}/${session}`}
        className="col-span-2 border text-center leading-8"
      >
        ◀ Previous
        <br />
      </Link>
      <Link
        href={`/prayer/${new Date().getMonth()}/${new Date().getDate()}/${session}`}
        className="col-span-2 border text-center leading-8"
      >
        Today
        <br />
      </Link>
      <Link
        href={`/prayer/${tomorrow}/${session}`}
        className="col-span-2 border text-center align-middle leading-8"
      >
        Next ▶
        <br />
      </Link>
      <Link
        href={`/prayer/${month}/${day}/morning`}
        className="col-span-3 border text-center leading-8"
      >
        ☀️ Morning
        <br />
      </Link>
      <Link
        href={`/prayer/${month}/${day}/evening`}
        className="col-span-3 border text-center leading-8"
      >
        Evening 🌙
        <br />
      </Link>
    </nav>
  );
}
