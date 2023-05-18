import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import Alert from '@/components/Alert';
import NavBar from '@/components/NavBar';
import Prayer from '@/components/prayer';
import Psalm from '@/components/psalm';
import elders from '@/data/elders';
import sessions from '@/data/sessions';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getSessionInfo } from '@/utils/data_utils';
import { fetchPsalms } from '@/utils/fetchPsalms';

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const allSessions = [] as any[];

  sessions.forEach((month: any) => {
    return month.days.forEach((day: any) => {
      return day.sessions.forEach((session: any) => {
        allSessions.push({
          month: month.month,
          day: day.day,
          session: session.session,
        });
      });
    });
  });

  const paths = allSessions.map((session: any) => {
    return {
      params: {
        month: session.month.toString(),
        day: session.day.toString(),
        session: session.session,
      },
    };
  });

  return { paths, fallback: false };
}

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const { month, day, session } = params;
  const sessionInfo = getSessionInfo({
    month: parseInt(month, 10),
    day: parseInt(day, 10),
    session,
  });

  if (!sessionInfo) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const psalms = await fetchPsalms(sessionInfo.psalms);
  return {
    props: {
      month: params!.month,
      day: params!.day,
      session: params!.session,
      sessionInfo,
      psalms,
    },
  };
};

export default function SessionPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { month, day, session, psalms, sessionInfo } = props;

  if (!session) {
    return null;
  }

  function getMonthName(m: number) {
    const date = new Date();
    date.setMonth(m - 1);
    return date.toLocaleString('en-US', { month: 'long' });
  }

  function getDayOfTheWeek() {
    const d = new Date(`${getMonthName(month)} ${day}, 2023`);
    return d.getDay();
  }

  const elderPrayer = elders.find((x: any) => x.id === getDayOfTheWeek() + 1);

  return (
    <Main meta={<Meta title={props.slug} description="Lorem ipsum" />}>
      <div className="mx-auto my-2 max-w-md px-2">
        <h1 className="text-center text-3xl font-bold">
          {session === 'morning' ? 'Morning' : 'Evening'} of{' '}
          {getMonthName(month)}, {day}
        </h1>
        <NavBar month={month} day={day} session={session} />
        <br />
        {sessionInfo.alerts &&
          sessionInfo.alerts.length &&
          sessionInfo.alerts.map((a: any, i: number) => (
            <Alert {...a} key={i} />
          ))}
        {/* {session === 'morning' &&  */}
        <>
          <h2 className="text-xl font-bold">Prayer for Common Purpose</h2>
          <Prayer prayer={elderPrayer} />
        </>
        {/* } */}
        {psalms.passages.map((x: any, i: number) => {
          return (
            <Psalm
              psalm={x}
              key={i}
              canonical={psalms.passage_meta[i].canonical}
            />
          );
        })}
      </div>
    </Main>
  );
}
