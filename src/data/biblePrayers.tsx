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
    intro:
      'Walking through a Psalm in prayer can take on many forms. Give this one a try! Read one verse. Pray a short prayer about the content of that verse. Then read the next verse, pray. And repeat through the whole Psalm. You can try the example below. Verse in italic. Sample prayer in normal font.)',
    scripture: [
      {
        reference: 'Psalm 23',
        text: (
          <div>
            <div>1 The LORD is my shepherd; I shall not want.</div>
            <div className="py-3 font-bold not-italic">
              Lord, you care for me. I know I will not be in need because you
              care for me.
            </div>
            <div>2 He makes me lie down in green pastures.</div>
            <div>He leads me beside still waters.</div>
            <div className="py-3 font-bold not-italic">
              Father, you give me rest and lead me in places of peace. Thank
              you.
            </div>

            <div>3 He restores my soul.</div>
            <div>He leads me in paths of righteousness</div>
            <div>for his name’s sake.</div>
            <div className="py-3 font-bold not-italic">
              God, I praise you for how you continually refresh me. God, glorify
              Your name as you make me holy as You are Holy.
            </div>

            <div className="py-3 font-bold not-italic underline">
              Try the rest on your own!!!
            </div>
            <div>
              4 Even though I walk through the valley of the shadow of death,
            </div>
            <div>I will fear no evil,</div>
            <div>for you are with me;</div>
            <div>your rod and your staff,</div>
            <div>they comfort me.</div>
            <div>5 You prepare a table before me</div>
            <div>in the presence of my enemies;</div>
            <div>you anoint my head with oil;</div>
            <div>my cup overflows.</div>
            <div>6 Surely goodness and mercy shall follow me</div>
            <div>all the days of my life,</div>
            <div>and I shall dwell in the house of the LORD</div>
            <div>forever.</div>
          </div>
        ) as ReactNode,
      },
    ],
  },
];

export default biblePrayers;
