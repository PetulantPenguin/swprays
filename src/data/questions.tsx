import type { ReactNode } from 'react';

import Verse from '@/components/Verse';

const questions: Question[] = [
  {
    id: 'A5',
    question: (
      <span>
        Am I expectant with my prayers&mdash;believing and trusting that God
        will answer them? Why or why not?
      </span>
    ) as ReactNode,
    scriptures: [
      {
        id: 1,
        reference: 'John 16:24',
        text: 'Until now you have asked nothing in my name. Ask, and you will receive, that your joy may be full.',
        comment:
          'In light of this verse, do I believe that God truly will give me the things that I ask for?',
      },
      {
        id: 2,
        reference: 'Matthew 7:9-11',
        text: (
          <>
            Or which one of you, if his son asks him for bread, will give him a
            stone? Or if he asks for a fish, will give him a serpent? If you
            then, who are evil, know how to give good gifts to your children,{' '}
            <span className="font-bold">
              how much more will your Father who is in heaven give good things
              to those who ask him!
            </span>
          </>
        ) as ReactNode,
        comment:
          'Yesterday, we asked if we believed that God really would give us what we ask for. Today, we find that God will not be outdone by mere humans. We ask our parents for gifts and expect to receive. How much more from our Heavely Father?',
      },
      {
        id: 3,
        reference: '1 John 5:14-15',
        text: (
          <>
            And this is the confidence that we have toward Him, that if we ask
            anything <span className="underline">according to His will</span> He
            hears us. And if we know that He hears us in whatever we ask, we
            know that we have the requests that we have asked of Him.”
          </>
        ),
        comment: (
          <>
            That is amazing! The God of the universe hears us! He wants to know
            what we need. He cares about what we care about. So, when God says
            He will give us the things we ask for, He actually wants to know
            what we want. And He delights to hear our prayers:
          </>
        ) as ReactNode,
      },
      {
        id: 3,
        reference: 'Proverbs 15:8 (NKJV)',
        text: (
          <>
            The sacrifice of the wicked is an abomination to the Lord,
            <br />
            <span className="font-bold">
              But the prayer of the upright is His delight.
            </span>
          </>
        ),
        comment: (
          <>
            God wants to hear your prayers. And God enjoys hearing your prayers.{' '}
            <span className="font-bold">
              What does it mean to you when you hear that your prayers bring God
              joy?
            </span>
          </>
        ) as ReactNode,
      },
      {
        id: 4,
        reference: 'Luke 22:42',
        text: (
          <>
            And [Jesus] withdrew from them about a stone’s throw, and knelt down
            and prayed, saying,{' '}
            <span className="font-semibold">
              &quot;Father, if you are willing, remove this cup from me.
              Nevertheless, not my will, but yours, be done.&quot;
            </span>
          </>
        ) as ReactNode,
        comment:
          'Believing that God always answers our prayer is not the same as getting everything for which we pray. He knows what is good for us and when to provide it, so we trust God to answer according to His will just as Jesus did Himself.',
      },
      {
        id: 4,
        reference: 'Romans 8:28',
        text: `And we know that for those who love God all things work together for good, for those who are called according to his purpose.`,
        comment:
          'As we saw in the 1 John verse from yesterday, we must ask according to His will. A loving parent would not give their child a cobra to play with no matter how much the child asked. Neither should we expect the Father to give us what we ask when we ask outside of the will He has set for our good.',
      },
      {
        id: 5,
        reference: 'Ephesians 3:20-21',
        text: (
          <>
            Now to him who is able to do far more abundantly than all that we
            ask or think, according to the power at work within us, to him be
            glory in the church and in Christ Jesus throughout all generations,
            forever and ever. Amen.
          </>
        ) as ReactNode,
        comment: (
          <>
            It may be hard to believe that God truly wants good things for His
            children AND He will actually give them when we ask. But, He not
            only gives those things to us,{' '}
            <span className="font-semibold italic">
              He is working to give us things even more amazing than we could
              ever imagine!
            </span>
          </>
        ),
      },
      {
        id: 5,
        comment: (
          <div className="p-6">
            <h4>Opportunity to Obey</h4>
            <p>
              As we seek to grow in confidence that God loves us and cares for
              us, we can memorize and meditate on His Word where He tells us
              what He is doing.
            </p>
            <Verse
              verse={{
                reference: 'Ephesians 3:14-19',
                text: (
                  <>
                    For this reason I bow my knees before the Father, from whom
                    every family in heaven and on earth is named, that according
                    to the riches of his glory he may grant you to be
                    strengthened with power through his Spirit in your inner
                    being, so that Christ may dwell in your hearts through
                    faith—that you, being rooted and grounded in love, may have
                    strength to comprehend with all the saints what is the
                    breadth and length and height and depth, and to know the
                    love of Christ that surpasses knowledge, that you may be
                    filled with all the fullness of God.
                    <div>
                      <span className="font-bold underline">
                        Bonus: Ephesians 3:20-21
                      </span>
                      <div>
                        Now to him who is able to do far more abundantly than
                        all that we ask or think, according to the power at work
                        within us, to him be glory in the church and in Christ
                        Jesus throughout all generations, forever and ever.
                        Amen.
                      </div>
                    </div>
                  </>
                ) as ReactNode,
              }}
            />
          </div>
        ),
      },
    ],
  },

  {
    id: 'B1',
    question: (
      <span>
        Do I tend to see prayer as an obligation or an opportunity, and why?
      </span>
    ) as ReactNode,

    scriptures: [
      {
        id: 1,
        reference: 'Daniel 6:10b',
        text: 'He got down on his knees three times a day and prayed and gave thanks before his God, as he had done previously.',
        comment: (
          <div className="text-xl">
            <p>Does the thought of praying three times a day seem annoying?</p>
            <p>What about &quot;ceaselessly&quot; day and night forever?</p>
          </div>
        ),
      },
      {
        id: 1,
        reference: 'Revelation 4:8-11',
        text: (
          <div>
            <p>
              And the four living creatures, each of them with six wings, are
              full of eyes all around and within, and day and night they never
              cease to say,
            </p>
            <p className="text-center">
              “Holy, holy, holy, is the Lord God Almighty,
              <br />
              who was and is and is to come!”
            </p>
            <p>
              9 And whenever the living creatures give glory and honor and
              thanks to him who is seated on the throne, who lives forever and
              ever, 10 the twenty-four elders fall down before him who is seated
              on the throne and worship him who lives forever and ever. They
              cast their crowns before the throne, saying,
            </p>
            <p className="text-center">
              11 “Worthy are you, our Lord and God,
              <br />
              to receive glory and honor and power,
              <br />
              for you created all things,
              <br />
              and by your will they existed and were created.”
            </p>
          </div>
        ) as ReactNode,
        comment: (
          <div className="text-xl">
            <p>
              <span className="font-bold italic">Question</span>: Do I see
              prayer as a Chore or a chance to Adore?
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'A1',
    question: (
      <div>
        <p>
          When I pray, do I have a conversation with God, or have I reduced it
          to “hitting repeat” and praying the same thing everyday? Why?
        </p>
      </div>
    ) as ReactNode,
    scriptures: [
      {
        id: 1,
        comment: (
          <>
            <p className="pt-4 text-xl">
              Summer of Prayer is in it&apos;s 3rd week!
            </p>
            <ul className="list-outside list-disc pl-10">
              <li>Has it become formulaic to you?</li>
              <li>Do you look forward to meeting with God each day?</li>
              <li>Are you checking the box?</li>
              <li>Are you worried that there are 7 more weeks?</li>
              <li>
                Have you met with God in the last week? Through this site or
                otherwise?
              </li>
            </ul>
            <p className="text-xl">
              We would say that someone talking to a wall for 4 hours is crazy.
              But, someone talking to a friend for 4 hours has a really good
              relationship with their friend. Do you feel like talking to God is
              more like talking to a wall or a good friend?
            </p>
          </>
        ),
      },
      {
        id: 1,
        reference: '1 Kings 9:3a',
        text: 'And the Lord said to him, “I have heard your prayer and your plea, which you have made before me.”',
        comment: (
          <div className="text-xl">
            <p>What does it mean to know that God hears your prayer?</p>
            <p>Not only does God listen, but He helps us pray too!</p>
          </div>
        ),
      },
      {
        id: 1,
        reference: 'Romans 8:26',
        text: 'Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.”',
        comment: (
          <div className="text-xl">
            <p>Not only does He hear, but He answers too!</p>
          </div>
        ),
      },
      {
        id: 1,
        reference: 'Psalm 138:3',
        text: 'When I called, you answered me; you greatly emboldened me.',
      },
      {
        id: 1,
        reference: 'Psalm 91:15',
        text: 'He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.',
        comment: (
          <div className="text-xl">
            <p>When you talk to God, He hears you.</p>
            <p>When you ask, He answers.</p>
            <p>
              That sounds much more like a conversation with a friend than
              talking to a wall.
            </p>
            <p>
              So, as we go through the Summer of Prayer, let&apos;s remember
              that prayer is a conversation WITH God. We pray and bring Him joy.
              And He listens and responds to us. Praying the Psalms, common
              prayers, etc. provide a starting place or a format. God wants you
              to talk to Him and He wants to talk to you.
            </p>
          </div>
        ),
      },
    ],
  },
];
export default questions;
