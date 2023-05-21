/* tslint:disable */
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
  const thisSession = session === 'morning';
  if (thisSession) {
    console.log('morning');
  }
  return (
    <nav className="grid grid-cols-6 justify-center gap-y-2 pb-8">
      {/* {!yesterdayToEarly?
      (<Link
        href={`/prayer/${yesterday}/${session}`}
        className={classNames(
          tomorrowFuture ? 'col-span-4' : 'col-span-2',
          'border text-center leading-8'
        )}
      >
        ◀ Previous
        <br />
      </Link>):null}
      <Link
        href={`/prayer/${
          new Date().getMonth() + 1
        }/${new Date().getDate()}/${session}`}
        className={classNames(
          `col-span-${2+(2*(Number(yesterdayToEarly)+Number(tomorrowFuture)))}`,
          "border text-center leading-8"
        )}
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
      )} */}
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
