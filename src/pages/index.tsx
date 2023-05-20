import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

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

  const now = new Date();
  const startDate = new Date(`May 21, 2023`);

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
        <NavBar month={month} day={day} session={session} />
        {now < startDate ? (
          <>
            <h1 className="text-center text-3xl font-bold">
              Welcome to the Summer of Prayer!
            </h1>
            <p>This summer, Southwest Bible is focused on the question,</p>
            <div className="text-center font-bold italic">
              &quot;How is your prayer life growing more meaningful?&quot;
            </div>{' '}
            <p>
              To answer this question, we will put prayer into practice. The
              Bible wants each of us to be praying people, but sometimes
              it&apos;s hard to know where to start. This site is to help each
              person, young and old, grow in their prayer life.
            </p>
            <p className="font-semibold italic">
              This means you! You are invited to journey with us towards a more
              meaningful prayer life, no matter where you are starting today!
            </p>
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p>
              Each day is broken into two sections, Morning and Evening, each
              with its own content.
            </p>
            <ul className="list-inside list-disc">
              <li>Prayers for Common Purpose</li>
              <li>Verses</li>
              <li>Psalms</li>
              <li>Written prayers used by the Church across history</li>
              <li>Questions for reflection</li>
              <li>Special events and challenges</li>
            </ul>
            <h2 className="text-2xl font-semibold">We will be praying for:</h2>
            <ul>
              <li>
                <span className="font-semibold">Sunday</span> &mdash; Joyful
                Worship
              </li>
              <li>
                <span className="font-semibold">Monday</span> &mdash; Church
                Planting
              </li>
              <li>
                <span className="font-semibold">Tuesday</span> &mdash;
                Evangelism
              </li>
              <li>
                <span className="font-semibold">Wednesday</span> &mdash;
                Discipleship
              </li>
              <li>
                <span className="font-semibold">Thursday</span> &mdash; Families
                and our Church Family
              </li>
              <li>
                <span className="font-semibold">Friday</span> &mdash; The Lost
              </li>
              <li>
                <span className="font-semibold">Saturday</span> &mdash; Fellow
                Christians facing Persecution
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href={`/prayer/5/21/morning`} className="p-4 font-bold">
                Take a Peek!
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center text-3xl font-bold">
              {session === 'morning' ? 'Morning' : 'Evening'} of{' '}
              {getMonthName(month)}, {day}
            </h1>
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
          </>
        )}
      </div>
    </Main>
  );
};

export default Index;
