import { Fragment } from 'react';

import elders from '@/data/elders';
import fromSWBC from '@/data/fromSWBC';
import questions from '@/data/questions';
import spotify from '@/data/spotify';
import videos from '@/data/videos';
import { getDayOfTheWeek, getMonthName } from '@/utils/utilities';

import Alert from './Alert';
import BiblePrayer from './BiblePrayer';
import Collects from './Collects';
import NavBar from './NavBar';
import Prayer from './Prayer';
import Psalm from './Psalm';
import Quote from './Quote';
import SpotifyEmbed from './SpotifyEmbed';
import Verse from './Verse';
import YoutubeEmbed from './YoutubeEmbed';

type Props = {
  month: number;
  day: number;
  session: string;
  psalmText: Psalms[];
  sessionInfo: Session;
  dayInfo: Day;
};

function PacketInfo({ packetQuestions }: { packetQuestions?: PacketQuestion }) {
  if (!packetQuestions) {
    return null;
  }

  const theQuestions = questions.filter((x: any) =>
    packetQuestions.questionIds.includes(x.id)
  );

  if (!theQuestions) {
    return null;
  }
  return (
    <>
      <h2>🌴 Root, ✂️ Prune, 🍇 Fruit</h2>
      {theQuestions.map((q: Question, i: number) => (
        <div key={i} className="mb-4 border-b border-black p-6">
          <div key={i} className="font-semibold italic">
            {q.question}
          </div>
          {q.scriptures?.map((x: any, j: number) => {
            if (x.id === 0 || packetQuestions.days.includes(x.id)) {
              return (
                <Fragment key={j}>
                  {x.reference ? <Verse verse={x} /> : null}
                  {x.comment ? (
                    <div className="text-base">{x.comment}</div>
                  ) : null}
                </Fragment>
              );
            }
            return null;
          })}
        </div>
      ))}
    </>
  );
}

function Questions({ quests }: { quests: Question[] }) {
  return (
    <>
      {quests.map((q: Question, i: number) => (
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

function Psalms({ psalmText }: { psalmText: Psalms[] }) {
  return (
    <>
      <h2>Psalms</h2>
      {psalmText.map((x: any, i: number) => {
        return <Psalm psalm={x.passages[0]} key={i} canonical={x.canonical} />;
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
          <div key={i} className="mb-8">
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

function Spotifys({ spotIds }: { spotIds: number[] }) {
  if (!spotIds.length) {
    return null;
  }
  const theVideos = spotify.filter((x: Spotify) => spotIds.includes(x.id));
  return (
    <>
      {theVideos.map((x: any, i: number) => {
        const { url, title } = x;
        return (
          <div key={i} className="mb-8">
            {title && <h3>{title}</h3>}
            <SpotifyEmbed url={url} />
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

function getDayName(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });
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

  const spotIds = [
    ...(Array.isArray(dayInfo?.spotify) ? dayInfo.spotify : []),
    ...(Array.isArray(sessionInfo?.spotify) ? sessionInfo.spotify : []),
  ];

  return (
    <div className="my-2">
      <h1>
        {getDayName(`${month}/${day}/2023`, 'en-US')}{' '}
        {session === 'morning' ? 'Morning' : 'Evening'}
        <br />
        {getMonthName(month)} {day}
      </h1>

      <NavBar month={month} day={day} session={session} />

      {alerts.length ? <Alerts alerts={alerts} /> : null}

      {session === 'morning' && <SharedPurpose month={month} day={day} />}

      <PacketInfo packetQuestions={dayInfo.packetQuestions} />

      {dayInfo?.questions && <Questions quests={dayInfo.questions} />}

      {sessionInfo.collects ? (
        <Collects collectList={sessionInfo.collects} />
      ) : null}

      <FromSouthwest fromSouthwest={froms} />

      <BiblePrayers biblePrayerIds={biblePrayerIds} />

      {quotes.length ? <Quotes quoteIds={quotes} /> : null}

      <Videos vIds={vIds} />
      <Spotifys spotIds={spotIds} />

      {psalmText?.length && <Psalms psalmText={psalmText} />}
    </div>
  );
}
