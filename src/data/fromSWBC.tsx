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
  {
    id: 2,
    comment: (
      <div>
        <div>
          In case you missed it, James Foster, preached this week at Southwest
          Bible. He is one of the church planters named in the SWBC Shared
          Purpose prayer today.
        </div>
        <ul className="list-inside list-disc pb-4">
          <li>Listen below to his message &quotFamily on Mission.&quot</li>
          <li>
            Check out the new church:{' '}
            <a href="https://taylorbible.org/">Taylor Bible Church</a>
          </li>
          <li>
            Add James, his family, and Taylor Bible Church to your prayer list.
            <ul className="list-outside list-disc pl-10">
              <li>Wife, Katie, is 35 weeks pregnant with their 3rd child</li>
              <li>Lee and other members of the launch team</li>
              <li>favor in the city of Taylor for the new church</li>
            </ul>
          </li>
        </ul>
        <div className="video-responsive">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/831052578?h=ac4e128e00"
            width="640"
            height="360"
          ></iframe>
        </div>
      </div>
    ) as ReactNode,
  },
];
export default fromSWBC;
