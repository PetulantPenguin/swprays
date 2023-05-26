import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Session from '@/components/Session';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getDayInfo, getSessionInfo } from '@/utils/data_utils';
import { fetchPsalms } from '@/utils/fetchPsalms';

export const getServerSideProps: GetServerSideProps = async () => {
  const now = new Date();
  const adjustedTime = new Date(now.getTime() + -5 * 60 * 60 * 1000);
  const month = adjustedTime.getMonth() + 1;
  const day = adjustedTime.getDate();
  const session = adjustedTime.getHours() > 12 ? 'evening' : 'morning';

  const dayInfo = getDayInfo({
    month,
    day,
  });

  const sessionInfo = getSessionInfo({
    month,
    day,
    session,
  });

  const psalmText = sessionInfo?.psalms.length
    ? await fetchPsalms(sessionInfo?.psalms || [])
    : [];
  return {
    props: {
      month,
      day,
      session,
      sessionInfo,
      dayInfo,
      psalmText,
    },
  };
};

const Index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <Main
      meta={
        <Meta
          title={`Home | App of Common Prayer | Summer of Prayer | Southwest Bible Church`}
          description={`Home | App of Common Prayer | Summer of Prayer | Southwest Bible Church`}
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
};

export default Index;
