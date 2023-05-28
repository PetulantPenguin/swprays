import type { ReactNode } from 'react';

const videos: Video[] = [
  {
    id: 1,
    videoId: '_z2JOZ9h8MU',
    comment: (
      <div>
        <p>
          If you have something you would like to say, share, add to the prayer
          app, let me know!
        </p>
        <div>
          Email:{' '}
          <a
            href="mailto:prayerapp@fastfox.aleeas.com"
            className="dark:text-blue-400 dark:underline"
          >
            prayerapp@fastfox.aleeas.com
          </a>
        </div>
      </div>
    ) as ReactNode,
  },
  {
    id: 2,
    videoId: 'XtwIT8JjddM',
    comment: (
      <div>
        <p>
          If you have something you would like to say, share, add to the prayer
          app, let me know!
        </p>
        <div>
          Email:{' '}
          <a
            href="mailto:prayerapp@fastfox.aleeas.com"
            className="dark:text-blue-400 dark:underline"
          >
            prayerapp@fastfox.aleeas.com
          </a>
        </div>
      </div>
    ) as ReactNode,
  },
  {
    id: 3,
    videoId: 'ZI8Ul-bt1k8',
    title: 'Psalm 1',
    comment: (
      <div>
        <p>Psalms are songs. Sing them! 😁</p>
      </div>
    ) as ReactNode,
  },
  {
    id: 4,
    videoId: 'chTGdEiG3R0',
    title: 'Psalm 4',
  },
  {
    id: 5,
    videoId: 'BFWjFsxp4Sc',
    title: '"As for Me" adapted for Psalm 2',
  },
];
export default videos;
