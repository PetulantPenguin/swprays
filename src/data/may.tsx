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
      day: 26,
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
      day: 27,
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
      day: 28,
      sessions: [
        {
          session: 'morning',
          psalms: [1, 2],
          collects: [],
        },
        {
          session: 'evening',
          psalms: [3],
          collects: [],
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
