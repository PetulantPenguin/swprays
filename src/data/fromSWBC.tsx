import type { ReactNode } from 'react';

const fromSWBC: FromSWBC[] = [
  {
    id: 1,
    who: 'Cal Axtell',
    text: 'This is the song I think of when I read Psalm 103:',
    video: ['_z2JOZ9h8MU'],
    comment: (
      <div>
        <p>
          If you have something you would like to say, share, add to the prayer
          app, let me know!
        </p>
        <div>
          Email:{' '}
          <a href="mailto:prayerapp@fastfox.aleeas.com">
            prayerapp@fastfox.aleeas.com
          </a>
        </div>
      </div>
    ) as ReactNode,
  },
];
export default fromSWBC;
