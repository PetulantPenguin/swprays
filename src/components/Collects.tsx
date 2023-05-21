import collects from '@/data/collects';

import Prayer from './Prayer';

export default function Collects({ collectList }: { collectList: number[] }) {
  if (!collectList.length) {
    return null;
  }
  const prayers = collects.filter((x) => collectList.includes(x.id));
  return (
    <>
      <h2>Common Prayers</h2>
      {prayers.map((prayer: Prayer, i: number) => (
        <Prayer prayer={prayer} key={i} />
      ))}
      <hr />
    </>
  );
}
