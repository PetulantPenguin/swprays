type Prayer = {
  id: number;
  title?: string;
  blurb?: string;
  intro?: string;
  text?: any;
  commentary?: string;
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

type Day = {
  day: number;
  sessions: Session[];
  quotes?: number[];
  alerts?: Alert[];
  questions?: Question[];
  encouragements?: Quote[];
  biblePrayers?: number[];
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
  message: string;
  level: 'info' | 'warn' | 'error' | 'commentary';
};

type Question = {
  question: string;
  comment?: string;
};

type Session = {
  session: string;
  psalms: number[];
  quotes?: number[];
  collects?: number[];
  biblePrayers?: number[];
  alerts?: Alert[];
  questions?: Question[];
  verses?: Verse[];
};
type Psalms = {
  query: string;
  canonical: string;
  passage_meta: any[];
  passages: string[];
};
