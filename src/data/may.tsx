const may: Month = {
  month: 5,
  days: [
    {
      day: 21,
      alerts: [
        {
          message: 'Welcome to the first day of the Summer of Prayer!',
          level: 'info',
        },
      ],
      questions: [
        {
          question:
            'Do I tend to see prayer as an obligation or an opportunity, and why?',
        },
      ],
      encouragements: [
        {
          comment: 'Concerned you might be praying wrong?',
          text: 'I like my way of doing it better than your way of not doing it.',
          author: 'DL Moody',
        },
      ],
      sessions: [
        {
          session: 'morning',
          psalms: [],
          collects: [],
          alerts: [
            {
              message:
                'The key to prayer is to pray! This morning, you will see a section called "SWBC Shared Purpose." Prayer is better together! Each day, each person at SWBC will be praying for something together. Today is for JOY in our service and worship. Yes! You can pray for joy. Join the rest of your church family praying for joy today! The verses below are to help you think through what we are praying for. Come back tomorrow morning for the next Common Purpose.',
              level: 'commentary',
            },
          ],
        },
        {
          session: 'evening',
          psalms: [],
          collects: [1],
          alerts: [
            {
              message:
                'Missed prayer this morning? No problem! Click the "Morning" button above!',
              level: 'warn',
            },
          ],
        },
      ],
    },
    {
      day: 22,
      questions: [
        {
          question:
            'In what ways am I reading Scripture and allowing it to shape my prayers?',
        },
      ],
      alerts: [
        {
          message: `Missed yesterday's prayer? No problem! Click the "Previous" button above to see what you missed!`,
          level: 'warn',
        },
      ],
      sessions: [
        {
          session: 'morning',
          psalms: [],
          collects: [],
        },
        {
          session: 'evening',
          psalms: [],
          collects: [],
          biblePrayers: [1],
          alerts: [
            {
              message: `Scripture doesn't just work alongside prayer. You can even pray Scripture! Here is an example to try this evening. You can pray the prayer below, or pray the words God gives you as you think and meditate on Phillipians 4:6-7.`,
              level: 'commentary',
            },
          ],
        },
      ],
    },
    {
      day: 23,
      sessions: [
        {
          session: 'morning',
          psalms: [],
          collects: [],
        },
        {
          session: 'evening',
          psalms: [],
          collects: [2],
          alerts: [
            {
              message: `You saw a "Common Prayer" on Sunday. Here is another one. These prayers are written prayers prayed by Christians in various times, places, and seasons. Common prayers give us a chance to pray for things we may not have thought on our own, with words we may not have used on our own, and with people we may not have met on our own.`,
              level: 'commentary',
            },
          ],
        },
      ],
    },
    {
      day: 24,
      biblePrayers: [3],
      questions: [
        {
          question:
            'In what ways does the Enemy sidetrack my prayer life? Be specific.',
          comment: `Read the words in the Lord’s Prayer below "...but deliver us from evil..." Have you considered the Evil One my be distracting you from prayer? Good news! You can pray to the Father to deliver you from the distractions of Satan and into a more intimate prayer life.`,
        },
      ],
      sessions: [
        {
          session: 'morning',
          psalms: [],
          collects: [],
        },
        {
          session: 'evening',
          psalms: [],
          collects: [],
        },
      ],
    },
    {
      day: 25,
      alerts: [
        {
          title: 'Psalms are coming...',
          message: `We know the Book of Psalms as the song book of God's people. Throughout time, Psalms has also been the PRAYER book of God's people. This Sunday we will begin reading through the Psalms in 60 days. Start today with a short psalm to practice!`,
          level: 'commentary',
        },
        {
          message: `At the bottom of the page, you will see the full text of Psalm 23 with an audio player. This is how all Psalms will appear through this summer.`,
          level: 'info',
        },
      ],
      biblePrayers: [4],
      sessions: [
        {
          session: 'morning',
          psalms: [23],
          collects: [],
        },
        {
          session: 'evening',
          psalms: [23],
          collects: [],
        },
      ],
    },
    {
      day: 26,
      alerts: [
        {
          title: `Psalms are coming.`,
          level: 'commentary',
          message: `The Psalms have been prayed by Christians everywhere for thousands of years. We join each other in prayer as Southwest Bible Church. But, God's people are not just here and now. We are part of a family spanning continents and eons. We speak words spoken in all places and at all times--words of praise to the one King, the Lord Jesus Christ.`,
        },
      ],
      sessions: [
        {
          session: 'morning',
          psalms: ['103:1-6'],
          collects: [],
        },
        {
          session: 'evening',
          psalms: ['103:19-22'],
          collects: [4],
          quotes: [1],
        },
      ],
    },
    {
      day: 27,
      alerts: [
        {
          message: `Psalms are coming!`,
          level: 'warn',
        },
      ],
      sessions: [
        {
          session: 'morning',
          psalms: [43],
          collects: [],
          fromSWBC: [1],
        },
        {
          session: 'evening',
          psalms: [43],
          collects: [
            3, // Preparation for Worship
          ],
          video: [2],
        },
      ],
    },
    {
      day: 28,
      alerts: [
        {
          title: 'Psalms are here!',
          message: `We know the Book of Psalms as the song book of God's people. Throughout time, Psalms has also been the PRAYER book of God's people. Believers have sung, chanted, read, and, yes, prayed the Psalms. And believers throughout the world to this day continue singing and praying the Psalms! Today begins 60 days through of the Psalms. As you read the Psalms with others at SWBC, pray for what God is showing you in each verse.`,
          level: 'commentary',
        },
      ],
      sessions: [
        {
          session: 'morning',
          psalms: [1, 2],
          collects: [],
          video: [3, 5],
          biblePrayers: [5],
        },
        {
          session: 'evening',
          psalms: [3],
          collects: [6],
        },
      ],
    },
    {
      day: 29,
      sessions: [
        {
          session: 'morning',
          psalms: [4, 5],
          collects: [],
          video: [4],
        },
        {
          session: 'evening',
          psalms: [6],
          collects: [],
        },
      ],
    },
    {
      day: 30,
      sessions: [
        {
          session: 'morning',
          psalms: [7, 8],
          collects: [],
        },
        {
          session: 'evening',
          psalms: [9],
          collects: [],
        },
      ],
    },
    {
      day: 31,
      sessions: [
        {
          session: 'morning',
          psalms: [10, 11],
          collects: [],
        },
        {
          session: 'evening',
          psalms: [12],
          collects: [],
        },
      ],
    },
  ],
};

export default may;
