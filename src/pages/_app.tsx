import type { AppProps } from 'next/app';

import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-XC1JR9LET6'
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XC1JR9LET6');`}
      </Script> */}

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
