import sessions from '@/data/sessions';

export function getSessionInfo({
  month = new Date().getMonth(),
  day = new Date().getDate(),
  session,
}: {
  month: number;
  day: number;
  session: string;
}) {
  const theMonth = sessions.find((x: any) => x.month === month);
  const theDay = theMonth?.days.find((x: any) => x.day === day);
  const theSession = theDay?.sessions.find((x: any) => x.session === session);
  return theSession;
}
