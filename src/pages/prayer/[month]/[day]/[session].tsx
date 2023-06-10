import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import Session from '@/components/Session';
import sessions from '@/data/sessions';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getDayInfo, getSessionInfo } from '@/utils/data_utils';
import fetchPsalmCache from '@/utils/fetchPsalms';
import { getMonthName } from '@/utils/utilities';

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

  const dayInfo = getDayInfo({
    month: parseInt(month, 10),
    day: parseInt(day, 10),
  });

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

  const psalmText = sessionInfo?.psalms.length
    ? fetchPsalmCache(sessionInfo?.psalms || [])
    : [];

  return {
    props: {
      month: params!.month,
      day: params!.day,
      session: params!.session,
      dayInfo,
      sessionInfo,
      psalmText,
    },
  };
};

export default function SessionPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Main
      meta={
        <Meta
          title={`${getMonthName(props.month)} ${
            props.day
          }, 2023| App of Common Prayer | Summer of Prayer | Southwest Bible Church`}
          description={`${getMonthName(props.month)} ${
            props.day
          }, 2023| App of Common Prayer | Summer of Prayer | Southwest Bible Church`}
        />
      }
    >
      <Session
        month={props.month}
        day={props.day}
        session={props.session}
        psalmText={props.psalmText}
        sessionInfo={props.sessionInfo}
        dayInfo={props.dayInfo}
      />
    </Main>
  );
}
