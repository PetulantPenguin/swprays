import type { ReactNode } from 'react';

const biblePrayers: Prayer[] = [
  {
    id: 1,
    scripture: [
      {
        reference: 'Philippians 4:6-7',
        text: (
          <div>
            Do not be anxious about anything, but in everything by prayer and
            supplication with thanksgiving let your requests be made known to
            God. And the peace of God, which surpasses all understanding, will
            guard your hearts and your minds in Christ Jesus.
          </div>
        ) as ReactNode,
      },
    ],
    blurb: 'One way to pray this scripture:',
    commentary: `Lord, I thank you that I don’t have to be anxious about anything. I thank you that I can lay every burden and every care at your feet. Instead of trying to fix my problems on my own, I thank you that I can give them to you. Thank you Lord that when I give you my anxiety and my worries, you give me your peace. Even when things may be going wrong, internally I can have peace. And Lord, help me to do this. Help me to lay these anxieties at your feet. Help me to give them to you even when I’d much rather hang on to them. Help me to trust you to do what only you can do instead of trying to do what I cannot do. Thank you Lord. Amen.`,
  },
  {
    id: 2,
    intro:
      'Short passages and verses can be meditated on and prayed over multiple times throughout the day. Give it a try with this one verse!',
    scripture: [
      {
        reference: 'Psalm 119:105',
        text: (
          <div>
            <div>Your word is a lamp to my feet</div>
            <div>and a light to my path.</div>
          </div>
        ) as ReactNode,
      },
    ],
  },
  {
    id: 3,
    intro: `The Lord’s Prayer`,
    scripture: [
      {
        reference: 'Matthew 6:9-13',
        text: (
          <div className="text-center">
            <div>Our Father in heaven,</div>
            <div className="pb-3">hallowed be your name.</div>
            <div>Your kingdom come,</div>
            <div>your will be done,</div>
            <div className="pb-3 pl-4">on earth as it is in heaven.</div>
            <div className="pb-3">Give us this day our daily bread,</div>
            <div>and forgive us our debts,</div>
            <div className="pb-3 pl-4">
              as we also have forgiven our debtors.
            </div>
            <div>And lead us not into temptation,</div>
            <div className="pb-3 pl-4">but deliver us from evil.</div>
            <div>For yours is the kingdom</div>
            <div className="pb-3">and the power and the glory, forever.</div>
            <div>Amen</div>
          </div>
        ) as ReactNode,
      },
    ],
    commentary: `This is how Jesus answered the disciples when they said, "Lord, teach us to pray." Read it. Pray it. Meditate on each line. Read it again. Pray it again.`,
  },
  {
    id: 4,
    intro: '',
    scripture: [
      {
        reference: 'Psalm 119:105',
        text: (
          <div>
            <div>Your word is a lamp to my feet</div>
            <div>and a light to my path.</div>
          </div>
        ) as ReactNode,
      },
    ],
  },
];

export default biblePrayers;
