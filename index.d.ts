type Prayer = {
  id: Number;
  title: string;
  blurb: string;
  text: string;
  scripture: Verse[];
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
};

type Alert = {
  message: string;
  level: 'info' | 'warn' | 'error';
};

type Question = {
  question: string;
};

type Session = {
  session: string;
  psalms: number[];
  elders: number[];
  collects: number[];
  alerts?: Alert[];
  questions?: Question[];
  verses?: Verse[];
};
