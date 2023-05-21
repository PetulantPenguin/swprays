import elders from '@/data/elders';
import { getDayOfTheWeek, getMonthName } from '@/utils/utilities';

import Alert from './Alert';
import Collects from './Collects';
import NavBar from './NavBar';
import Prayer from './Prayer';
import Psalm from './Psalmx';

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
        <div
          key={i}
          className="mb-2 flex items-center rounded-lg border-blue-800 bg-blue-100 p-4 text-blue-800"
        >
          <div className="p-3 text-4xl text-orange-700">?</div>
          <div>{q.question}</div>
        </div>
      ))}
      <hr />
    </>
  );
}

function CommonPrayer({ elderPrayer }: { elderPrayer?: Prayer }) {
  if (!elderPrayer) {
    return null;
  }
  return (
    <>
      <h2>Pray with Common Purpose</h2>
      <Prayer prayer={elderPrayer} />
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

  const elderPrayer = elders.find(
    (x: any) => x.id === getDayOfTheWeek(month, day) + 1
  );
  const alerts = [
    ...(Array.isArray(dayInfo?.alerts) ? dayInfo.alerts : []),
    ...(Array.isArray(sessionInfo?.alerts) ? sessionInfo.alerts : []),
  ];
  return (
    <div className="mx-auto my-2 max-w-md px-2">
      <h1 className="mb-4 text-center text-3xl font-bold">
        {session === 'morning' ? 'Morning' : 'Evening'} of {getMonthName(month)}
        , {day}
      </h1>

      <NavBar month={month} day={day} session={session} />

      {alerts.length ? <Alerts alerts={alerts} /> : null}

      {session === 'morning' && elderPrayer && (
        <CommonPrayer elderPrayer={elderPrayer} />
      )}

      {dayInfo.questions && <Questions questions={dayInfo.questions} />}

      {session === 'evening' && sessionInfo.collects ? (
        <Collects collectList={sessionInfo.collects} />
      ) : null}

      {psalmText?.passages?.length && <Psalms psalmText={psalmText} />}
    </div>
  );
}
