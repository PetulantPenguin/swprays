import sessions from '@/data/sessions';

export function getDayInfo({
  month = new Date().getMonth(),
  day = new Date().getDate(),
}: {
  month: number;
  day: number;
}) {
  console.log(month, day);
  const theMonth = sessions.find((x: any) => x.month === month);
  console.log(theMonth);
  const theDay = theMonth?.days.find((x: any) => x.day === day);
  return theDay;
}

export function getSessionInfo({
  month = new Date().getMonth(),
  day = new Date().getDate(),
  session,
}: {
  month: number;
  day: number;
  session: string;
}) {
  const theSession = getDayInfo({ month, day })?.sessions.find(
    (x: any) => x.session === session
  );
  return theSession;
}
