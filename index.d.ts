type Prayer = {
  id: number;
  title?: string;
  blurb?: string;
  intro?: any;
  text?: any;
  commentary?: any;
  reference?: string;
  scripture?: Verse[];
  where?: string;
};

type Verse = {
  reference: string;
  text: any;
};

type Month = {
  month: number;
  days: Day[];
};

type PacketQuestion = {
  questionIds: string[];
  days: number[];
};

type Day = {
  day: number;
  sessions: Session[];
  quotes?: number[];
  alerts?: Alert[];
  packetQuestions?: PacketQuestion;
  questions?: Question[];
  encouragements?: Quote[];
  biblePrayers?: number[];
  fromSWBC?: number[];
  video?: number[];
};

type Quote = {
  id?: number;
  comment?: string;
  text: any;
  author?: string;
  where?: string;
};

type Alert = {
  title?: string;
  message: any;
  level: 'info' | 'warn' | 'error' | 'commentary';
};

type Question = {
  id?: string;
  question: any;
  comment?: string;
  scriptures?: any[];
  readings?: any[];
};

type Session = {
  fromSWBC?: number[];
  session: string;
  psalms: number[] | string[];
  quotes?: number[];
  collects?: number[];
  biblePrayers?: number[];
  alerts?: Alert[];
  questions?: Question[];
  packetQuestions?: PacketQuestion[];
  verses?: Verse[];
  video?: number[];
};
type Psalms = {
  query: string;
  canonical: string;
  passage_meta: any[];
  passages: string[];
};

type FromSWBC = {
  id: number;
  video?: string[];
  comment?: any;
  text?: any;
  who?: string;
};

type Video = {
  id: number;
  videoId: string;
  title?: string;
  comment?: any;
};
