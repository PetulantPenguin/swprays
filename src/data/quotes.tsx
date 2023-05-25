import type { ReactNode } from 'react';

const quotes: Quote[] = [
  {
    id: 1,
    text: (
      <div>
        ...true soul-winning work is more a service of pleading for souls than a
        service of pleading with souls. It is talking with GOD about men from a
        clean heart and in the power of the Spirit, rather than talking to men
        about GOD.
      </div>
    ) as ReactNode,
    author: 'Lewis S. Chafer',
    where: 'True Evangelism',
    comment:
      'Have you considered: the greatest work you can do for the salvation of another is sincere, earnest prayer?',
  },
];

export default quotes;
