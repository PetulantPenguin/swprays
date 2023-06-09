import '../styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@/components/Layout';

const queryClient = new QueryClient();

const analyticsMode =
  process.env.NEXT_PUBLIC_ANALYTICS_MODE === 'production'
    ? 'production'
    : 'development';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics mode={analyticsMode} />
    </QueryClientProvider>
  );
};

export default MyApp;
