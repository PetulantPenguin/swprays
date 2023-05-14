import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import NavBar from '@/components/NavBar';
import Prayer from '@/components/prayer';
import Psalm from '@/components/psalm';
import elders from '@/data/elders';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getSessionInfo } from '@/utils/data_utils';
import { fetchPsalms } from '@/utils/fetchPsalms';

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async () => {
  // @ts-ignore
  const now = new Date();
  let month;
  let day;
  const session = now.getHours() > 12 ? 'evening' : 'morning';
  if (now < new Date('05/21/2023')) {
    month = 5;
    day = 21;
  } else {
    month = now.getMonth();
    day = now.getDate();
  }

  const sessionInfo = getSessionInfo({
    month,
    day,
    session,
  });

  const psalms = await fetchPsalms(sessionInfo?.psalms || []);
  return {
    props: {
      month,
      day,
      session,
      sessionInfo,
      psalms,
    },
  };
};

const Index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { month, day, session, psalms } = props;

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
    <Main
      meta={
        <Meta
          title="Southwest Bible Summer of Prayer"
          description="Prayer app for Southwest Bible Church Summer of Prayer"
        />
      }
    >
      <div className="mx-auto my-2 max-w-md px-2">
        <h1 className="text-center text-3xl font-bold">
          {session === 'morning' ? 'Morning' : 'Evening'} of{' '}
          {getMonthName(month)}, {day}
        </h1>
        <NavBar month={month} day={day} session={session} />
        <Prayer prayer={elderPrayer} />
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
};

export default Index;
