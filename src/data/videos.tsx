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
  {
    id: 9,
    videoId: 'mBv21Q_WJp0',
    title: 'The Corner Room - "Psalm 13" (Lyric Video)',
  },
  {
    id: 10,
    videoId: 'apLjJIfLq-o',
    title: 'The Corner Room - "Psalm 16" (Lyric Video)',
  },
  {
    id: 11,
    videoId: 'GKgsJPAm3bg',
    title: 'Psalm 23 | The Corner Room',
  },
  {
    id: 12,
    videoId: 'Xo0BiZ_63n0',
    title: 'Shepherd (adapted from Psalm 23) - Lorshing',
  },
  {
    id: 13,
    videoId: 'Mo3HgtT_OiE',
    title: 'Psalm 23 - Surely Goodness, Surely Mercy - by Shane & Shane',
  },
  {
    id: 14,
    videoId: 'FsOZ3UsUbNA',
    title: 'Psalm 24 (The King of Glory) - Keith and Kristyn Getty',
  },
  {
    id: 15,
    videoId: 'Rv55qS7v2',
    title: 'Give Us Clean Hands - Chris Tomlin',
  },
  {
    id: 16,
    videoId: 'GlIi90b4wIw',
    title: 'King Of Glory - Third Day',
  },
  {
    id: 17,
    videoId: 'wGgsmCEgf4w',
    title: 'Tori Kelly - Psalm 42 (Live)',
    comment: (
      <div>
        <p>Thanks, Christina Cohee!</p>
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
    id: 18,
    videoId: '-9ZpEuUhSVc',
    title: 'Psalm 25 (Show Me Your Ways) by The Psalms Project (Lyric Video)',
  },
  {
    id: 19,
    videoId: 'fLLGwt-wZbI',
    title: 'Psalm 27 - Jonathan Ogden (Official Lyric Video)',
  },
  {
    id: 20,
    videoId: 'SbZOUtSiW80',
    title: 'Psalm 27 | Motion Worship',
  },
  {
    id: 21,
    videoId: 'UuuZMg6NVeA',
    title: 'Every Praise | Hezekiah Walker',
    comment: (
      <div>
        <p className="text-center font-bold italic">
          Every praise is to our God
          <br />
          Every word of worship
          <br />
          With one accord
        </p>
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
    id: 22,
    videoId: 'qOC_IM4aB2I',
    title: 'Matthew 11:28-30 | Corner Room',
    comment: (
      <div>
        <p>
          Phil asked us to memorize Matthew 11:28-29 this summer. Sometimes
          memorization is easier in song, so this video will reappear throughout
          the summer.
        </p>
        <p>
          <span className="font-semibold">From Phil</span>: &quot;As you are
          memorizing and reciting it back to yourself, pray and ask the Holy
          Spirit to use the Word of God to lead you into the rest of God.&quot;
        </p>
      </div>
    ) as ReactNode,
  },
  {
    id: 23,
    videoId: '4g_rd0aE8iQ',
    title: 'Psalm 30 | Corner Room',
  },
  {
    id: 24,
    videoId: 'gHDix8HHWCg',
    title: 'Trading My Sorrows | Darryl Evans',
  },
  {
    id: 25,
    videoId: '3ZHOeXHrsbg',
    title: 'Psalm 32 | Corner Room',
  },

  {
    id: 26,
    videoId: 'Hirevcewwjk',
    title: 'Psalm 31 (Into Your Hand) | Greg LaFollette',
  },

  {
    id: 27,
    videoId: 'rjFIm_513t4',
    title: 'Psalm 33 (Stand in Awe) (feat. Benjamin Ady) | The Psalms Project',
  },

  {
    id: 28,
    videoId: 'yOzf0VrDNGU',
    title: 'Psalm 34 - Taste and See | Shane &amp; Shane',
  },

  {
    id: 29,
    videoId: 'YVL0aka7Bho',
    title: 'Great Is The Lord | Michael W. Smith',
  },

  {
    id: 30,
    videoId: 'BwJI4hySK84',
    title: 'Psalm 35 | The Psalms Project',
  },

  {
    id: 31,
    videoId: '-QyyGJ6RK1A',
    title: 'Your Love Oh Lord | Third Day',
  },

  {
    id: 32,
    videoId: 'kqKVFYD8Obc',
    title: 'Be Still My Soul (Hymn) | Eclipse 6',
  },

  {
    id: 33,
    videoId: 'xoGfQtHUUgU',
    title: 'Good God | Mission House',
  },

  {
    id: 34,
    videoId: 'IqfV0zeEvT8',
    title: 'House Of The Lord | Phil Wickham',
  },

  {
    id: 35,
    videoId: 'Obp-9BEZe1c',
    title: 'Amazing Grace (My Chains Are Gone) | Pentatonix',
  },

  {
    id: 36,
    videoId: 'q7ho7OqFk60',
    title: 'Faithful | Erik Nieder',
  },

  {
    id: 37,
    videoId: 'MCaVjS6i0_8',
    title: 'O Praise Him | David Crowder Band',
  },
];
export default videos;
