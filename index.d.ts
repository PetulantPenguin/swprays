type Prayer = {
  id: number;
  title?: string;
  blurb?: string;
  text: string;
  commentary?: string;
  scripture?: Verse[];
};
type Verse = {
  reference: string;
  text: string;
};
type Month = {
  month: number;
  days: Day[];
};

type Day = {
  day: number;
  sessions: Session[];
  alerts?: Alert[];
  questions?: Question[];
};

type Alert = {
  message: string;
  level: 'info' | 'warn' | 'error' | 'commentary';
};

type Question = {
  question: string;
};

type Session = {
  session: string;
  psalms: number[];
  collects: number[];
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
