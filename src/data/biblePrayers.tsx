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
    commentary: (
      <>
        Lord, I thank you that I don&apos;t have to be anxious about anything. I
        thank you that I can lay every burden and every care at your feet.
        Instead of trying to fix my problems on my own, I thank you that I can
        give them to you. Thank you Lord that when I give you my anxiety and my
        worries, you give me your peace. Even when things may be going wrong,
        internally I can have peace. And Lord, help me to do this. Help me to
        lay these anxieties at your feet. Help me to give them to you even when
        I&apos;d much rather hang on to them. Help me to trust you to do what
        only you can do instead of trying to do what I cannot do. Thank you
        Lord. Amen.
      </>
    ) as ReactNode,
  },
  {
    id: 2,
    intro: (
      <>
        Short passages and verses can be meditated on and prayed over multiple
        times throughout the day. Give it a try with this one verse!
      </>
    ) as ReactNode,
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
  {
    id: 5,
    scripture: [
      {
        reference: 'Psalm 2:4-6',
        text: (
          <div className="text-center">
            <div>4 He who sits in the heavens laughs;</div>
            <div>the Lord holds them in derision.</div>
            <div className="mb-4 mt-2 text-left font-bold italic">
              Lord, You are seated in Heaven. The best of human devices is so
              far below you that it is laughable. I praise Your for your
              majesty. You are so much greater and higher than even the biggest
              human accomplishments.
            </div>
            <div>5 Then he will speak to them in his wrath,</div>
            <div>and terrify them in his fury, saying,</div>
            <div className="mb-4 mt-2 text-left font-bold italic">
              God, I trust that even when things seem terrible, You care. You
              will not let evil go unpunished. You can and will make all things
              right. Vengence is Yours, Lord.
            </div>
            <div>6 “As for me, I have set my King</div>
            <div>on Zion, my holy hill.”</div>
            <div className="mb-4 mt-2 text-left font-bold italic">
              Lord, I praise you seated on the throne. You are the one in charge
              I rest in your control.
            </div>
          </div>
        ) as ReactNode,
      },
    ],
    commentary: (
      <>
        This is how Jesus answered the disciples when they said, &lsquo;Lord,
        teach us to pray.&rsquo; Read it. Pray it. Meditate on each line. Read
        it again. Pray it again.
      </>
    ) as ReactNode,
  },
  {
    id: 6,
    intro: (
      <>
        <span className="underline">About Lament</span>: You will find many
        Psalms where the Psalmist cries out to God in pain. These are Psalms of
        Lament. Psalm 10 is one of these. The heart-felt emotion comes from deep
        pain of a man, even a king, living in a troubled world. The Psalmists
        were real people just like us, crying out to God about the pain of
        everyday life.
      </>
    ) as ReactNode,
    scripture: [
      {
        reference: 'Psalm 10:1',
        text: (
          <>
            Why, O LORD, do you stand far away? Why do you hide yourself in
            times of trouble?
          </>
        ) as ReactNode,
      },
    ],
    commentary: (
      <>
        <div></div>
        <div className="p-6">
          As you study Lamentations, out hope is that you might begin to become
          fluent in the dialect of lament. Just as you use other prayer
          dialects&mdash;adoration, thanksgiving, confession, and so
          on&mdash;lament is a biblical and needed form of prayer. It is pouring
          out your complaint to God.
          <div className="mb-4 text-right font-bold italic">
            From <span className="underline">Lamentations</span> (page 11)
            <br />
            by Blanton & Gordon
          </div>
          <div>
            📕 Southwest Bible Church women are meeting for a study of lament
            this summer. Contact Megan McCarthy for more info!
          </div>
        </div>
      </>
    ) as ReactNode,
  },
  {
    id: 7,
    intro: 'Your prayers are offered to God like incense.',
    scripture: [
      {
        reference: 'Revelation 8:3-4',
        text: (
          <div>
            And another angel came and stood at the altar with a golden censer,
            and he was given much incense to offer with the prayers of all the
            saints on the golden altar before the throne, and the smoke of the
            incense, with the prayers of the saints, rose before God from the
            hand of the angel.
          </div>
        ) as ReactNode,
      },
    ],
  },
  {
    id: 8,
    intro: 'Incense is described as a pleasing aroma to the Lord.',
    scripture: [
      {
        reference: 'Leviticus 6:15',
        text: (
          <div>
            And one shall take from it a handful of the fine flour of the grain
            offering and its oil and all the frankincense that is on the grain
            offering and burn this as its memorial portion on the altar, a
            pleasing aroma to the Lord.
          </div>
        ) as ReactNode,
      },
    ],
    commentary: (
      <>
        What difference does it make to think of your prayers as an offering
        that is pleasing to God?
      </>
    ) as ReactNode,
  },
];

export default biblePrayers;
