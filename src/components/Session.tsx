import elders from '@/data/elders';
import fromSWBC from '@/data/fromSWBC';
import videos from '@/data/videos';
import { getDayOfTheWeek, getMonthName } from '@/utils/utilities';

import Alert from './Alert';
import BiblePrayer from './BiblePrayer';
import Collects from './Collects';
import NavBar from './NavBar';
import Prayer from './Prayer';
import Psalm from './Psalm';
import Quote from './Quote';
import YoutubeEmbed from './YoutubeEmbed';

type Props = {
  month: number;
  day: number;
  session: string;
  psalmText: Psalms;
  sessionInfo: Session;
  dayInfo: Day;
};

function Questions({ questions }: { questions: Question[] }) {
  return (
    <>
      <h2>Questions for Reflection</h2>
      {questions.map((q: Question, i: number) => (
        <>
          <div
            key={i}
            className="mb-2 flex items-center rounded-lg border-blue-800 bg-blue-100 p-4 text-blue-800"
          >
            <div className="p-3 text-4xl text-orange-700">?</div>
            <div>{q.question}</div>
          </div>
          {q.comment ? (
            <p className="m-4 border border-blue-100 p-2 text-sm">
              {q.comment}
            </p>
          ) : null}
        </>
      ))}
      <hr />
    </>
  );
}

function SharedPurpose({ month, day }: { month: number; day: number }) {
  const elderPrayer = elders.find(
    (x: any) => x.id === getDayOfTheWeek(month, day) + 1
  );

  if (!elderPrayer) {
    return null;
  }

  return (
    <>
      <h2>SWBC Shared Purpose</h2>
      <Prayer prayer={elderPrayer} />
      <hr />
    </>
  );
}

function BiblePrayers({ biblePrayerIds }: { biblePrayerIds: number[] }) {
  if (!biblePrayerIds.length) {
    return null;
  }
  return (
    <>
      <h2>Praying Scripture</h2>
      {biblePrayerIds.map((x: number, i: number) => {
        return <BiblePrayer prayer={x} key={i} />;
      })}
      <hr />
    </>
  );
}

function Quotes({ quoteIds }: { quoteIds: number[] }) {
  if (!quoteIds.length) {
    return null;
  }
  return (
    <>
      <h2>A Word from the Brethren</h2>
      {quoteIds.map((x: number, i: number) => {
        return <Quote quoteId={x} key={i} />;
      })}
      <hr />
    </>
  );
}

function Psalms({ psalmText }: { psalmText: Psalms }) {
  return (
    <>
      <h2>Psalms</h2>
      {psalmText.passages.map((x: any, i: number) => {
        return (
          <Psalm
            psalm={x}
            key={i}
            canonical={psalmText.passage_meta[i].canonical}
          />
        );
      })}
      <hr />
    </>
  );
}

function FromSouthwest({ fromSouthwest }: { fromSouthwest: number[] }) {
  if (!fromSouthwest.length) {
    return null;
  }
  const froms = fromSWBC.filter((x: FromSWBC) => fromSouthwest.includes(x.id));
  return (
    <>
      <h2>From Southwest Bible</h2>
      {froms.map((x: any, i: number) => {
        const { who, comment, text, video } = x;
        return (
          <div key={i}>
            {who && <h3>{who} &mdash;</h3>}
            {text && <blockquote className="px-8">{text}</blockquote>}
            {video &&
              video.map((v: string, j: number) => (
                <YoutubeEmbed embedId={v} key={j} />
              ))}
            {comment && <div className="p-8">{comment}</div>}
          </div>
        );
      })}
      <hr />
    </>
  );
}

function Videos({ vIds }: { vIds: number[] }) {
  if (!vIds.length) {
    return null;
  }
  const theVideos = videos.filter((x: Video) => vIds.includes(x.id));
  return (
    <>
      {theVideos.map((x: any, i: number) => {
        const { comment, videoId, title } = x;
        return (
          <div key={i}>
            {title && <h3>{title}</h3>}
            <YoutubeEmbed embedId={videoId} />
            {comment && <div className="p-8">{comment}</div>}
          </div>
        );
      })}
      <hr />
    </>
  );
}

function Alerts({ alerts }: { alerts: Alert[] }) {
  return (
    <div className="pb-2">
      {alerts.map((a: any, i: number) => (
        <Alert {...a} key={i} />
      ))}
    </div>
  );
}

export default function Session(props: Props) {
  const { month, day, session, psalmText, sessionInfo, dayInfo } = props;

  if (!session) {
    return null;
  }

  const biblePrayerIds = [
    ...(Array.isArray(dayInfo?.biblePrayers) ? dayInfo.biblePrayers : []),
    ...(Array.isArray(sessionInfo?.biblePrayers)
      ? sessionInfo.biblePrayers
      : []),
  ];

  const quotes = [
    ...(Array.isArray(dayInfo?.quotes) ? dayInfo.quotes : []),
    ...(Array.isArray(sessionInfo?.quotes) ? sessionInfo.quotes : []),
  ];

  const alerts = [
    ...(Array.isArray(dayInfo?.alerts) ? dayInfo.alerts : []),
    ...(Array.isArray(sessionInfo?.alerts) ? sessionInfo.alerts : []),
  ];

  const froms = [
    ...(Array.isArray(dayInfo?.fromSWBC) ? dayInfo.fromSWBC : []),
    ...(Array.isArray(sessionInfo?.fromSWBC) ? sessionInfo.fromSWBC : []),
  ];

  const vIds = [
    ...(Array.isArray(dayInfo?.video) ? dayInfo.video : []),
    ...(Array.isArray(sessionInfo?.video) ? sessionInfo.video : []),
  ];

  return (
    <div className="my-2">
      <h1>
        {session === 'morning' ? 'Morning' : 'Evening'} of {getMonthName(month)}
        , {day}
      </h1>

      <NavBar month={month} day={day} session={session} />

      {alerts.length ? <Alerts alerts={alerts} /> : null}

      {session === 'morning' && <SharedPurpose month={month} day={day} />}

      {dayInfo?.questions && <Questions questions={dayInfo.questions} />}

      {session === 'evening' && sessionInfo.collects ? (
        <Collects collectList={sessionInfo.collects} />
      ) : null}

      <FromSouthwest fromSouthwest={froms} />

      <BiblePrayers biblePrayerIds={biblePrayerIds} />

      {quotes.length ? <Quotes quoteIds={quotes} /> : null}

      <Videos vIds={vIds} />

      {psalmText?.passages?.length && <Psalms psalmText={psalmText} />}
    </div>
  );
}
