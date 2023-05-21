export function getMonthName(m: number) {
  const date = new Date();
  date.setMonth(m - 1);
  return date.toLocaleString('en-US', { month: 'long' });
}
export function getDayOfTheWeek(month: number, day: number) {
  const d = new Date(`${getMonthName(month)} ${day}, 2023`);
  return d.getDay();
}
