import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      {/* <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools> */}
    </QueryClientProvider>
  );
};

export default MyApp;
