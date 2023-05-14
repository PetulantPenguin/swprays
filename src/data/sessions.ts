type Month = {
  month: number;
  days: Day[];
};
type Day = {
  day: number;
  sessions: Session[];
};
type Session = {
  session: string;
  psalms: number[];
  elders: number[];
  collects: number[];
};
const sessions: Month[] = [
  {
    month: 5,
    days: [
      {
        day: 21,
        sessions: [
          {
            session: 'morning',
            psalms: [1, 2],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [3],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 22,
        sessions: [
          {
            session: 'morning',
            psalms: [4, 5],
            elders: [2],
            collects: [3],
          },
          {
            session: 'evening',
            psalms: [6],
            elders: [4, 5],
            collects: [1],
          },
        ],
      },
      {
        day: 23,
        sessions: [
          {
            session: 'morning',
            psalms: [7, 8],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [9],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 24,
        sessions: [
          {
            session: 'morning',
            psalms: [10, 11],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [12],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 25,
        sessions: [
          {
            session: 'morning',
            psalms: [13, 14],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [15],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 26,
        sessions: [
          {
            session: 'morning',
            psalms: [16, 17],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [18],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 27,
        sessions: [
          {
            session: 'morning',
            psalms: [19, 20],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [21],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 28,
        sessions: [
          {
            session: 'morning',
            psalms: [22, 23],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [24],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 29,
        sessions: [
          {
            session: 'morning',
            psalms: [25, 26],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [27],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 30,
        sessions: [
          {
            session: 'morning',
            psalms: [28, 29],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [930],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
      {
        day: 31,
        sessions: [
          {
            session: 'morning',
            psalms: [31],
            elders: [1],
            collects: [2],
          },
          {
            session: 'evening',
            psalms: [32],
            elders: [1, 2, 3],
            collects: [2],
          },
        ],
      },
    ],
  },
  {
    month: 6,
    days: [
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [33],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [34],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 2,
        sessions: [
          {
            session: 'morning',
            psalms: [35],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [36],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 3,
        sessions: [
          {
            session: 'morning',
            psalms: [37],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [38],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 4,
        sessions: [
          {
            session: 'morning',
            psalms: [39, 40],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [41],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 5,
        sessions: [
          {
            session: 'morning',
            psalms: [42, 43],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [44],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 6,
        sessions: [
          {
            session: 'morning',
            psalms: [45, 46],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [47],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 7,
        sessions: [
          {
            session: 'morning',
            psalms: [48, 49],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [50],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 8,
        sessions: [
          {
            session: 'morning',
            psalms: [51, 52],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [53],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 9,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
      {
        day: 1,
        sessions: [
          {
            session: 'morning',
            psalms: [],
            elders: [],
            collects: [],
          },
          {
            session: 'evening',
            psalms: [],
            elders: [],
            collects: [],
          },
        ],
      },
    ],
  },
];

export default sessions;
