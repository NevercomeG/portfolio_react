import type { AppProps } from 'next/app';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-XC1JR9LET6'
      />

      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XC1JR9LET6');`}
      </Script>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/* <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools> */}
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
