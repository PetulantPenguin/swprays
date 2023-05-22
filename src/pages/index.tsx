import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

import Session from '@/components/Session';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getSessionInfo } from '@/utils/data_utils';
import { fetchPsalms } from '@/utils/fetchPsalms';

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async () => {
  // @ts-ignore
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const session = now.getHours() - 5 > 12 ? 'evening' : 'morning';

  const sessionInfo = getSessionInfo({
    month,
    day,
    session,
  });

  const psalms = sessionInfo?.psalms.length
    ? await fetchPsalms(sessionInfo?.psalms || [])
    : [];
  return {
    props: {
      month,
      day,
      session,
      sessionInfo,
      psalms,
      now,
    },
  };
};

const Index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const now = new Date();
  const startDate = new Date(`May 21, 2023`);
  console.log(props.now);
  return (
    <Main
      meta={
        <Meta
          title={`Home | App of Common Prayer | Summer of Prayer | Southwest Bible Church`}
          description={`Home | App of Common Prayer | Summer of Prayer | Southwest Bible Church`}
        />
      }
    >
      <div className="mx-auto my-2 max-w-md px-2">
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
          <Session
            month={props.month}
            day={props.day}
            session={props.session}
            psalmText={props.psalmText}
            sessionInfo={props.sessionInfo}
            dayInfo={props.dayInfo}
          />
        )}
      </div>
    </Main>
  );
};

export default Index;
