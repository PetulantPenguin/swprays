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
];
export default videos;
