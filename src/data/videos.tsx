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
  {
    id: 6,
    videoId: '9q9ByPsXezM',
    title: 'Reading of Psalm 1-41',
    comment: (
      <div>
        <p>A reading of the Psalms as you prepare for the end of day.</p>
      </div>
    ) as ReactNode,
  },
  {
    id: 7,
    videoId: 'bPSv8vredVs',
    title: 'Psalm 8 (How Majestic Is Your Name) | Shane & Shane',
  },
  {
    id: 8,
    videoId: 's7fYvt1PAV8',
    title: 'The Corner Room - "Psalm 11" (Lyric Video)',
  },
];
export default videos;
