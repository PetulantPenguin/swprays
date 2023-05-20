import classNames from 'classnames';
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

  const tomorrowFuture = new Date(`${tomorrow}/2023`) > new Date();

  return (
    <nav className="grid grid-cols-6 justify-center gap-y-2 pb-8">
      <Link
        href={`/prayer/${yesterday}/${session}`}
        className={classNames(
          tomorrowFuture ? 'col-span-4' : 'col-span-2',
          'border text-center leading-8'
        )}
      >
        ◀ Previous
        <br />
      </Link>
      <Link
        href={`/prayer/${
          new Date().getMonth() + 1
        }/${new Date().getDate()}/${session}`}
        className="col-span-2 border text-center leading-8"
      >
        Today
        <br />
      </Link>
      {!tomorrowFuture && (
        <Link
          href={`/prayer/${tomorrow}/${session}`}
          className="col-span-2 border text-center align-middle leading-8"
        >
          Next ▶
          <br />
        </Link>
      )}
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
