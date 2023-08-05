import type { AppProps } from 'next/app';
import NextTopLoader from 'nextjs-toploader';

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
      <NextTopLoader
        color='#2299DD'
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        easing='ease'
        speed={200}
        shadow='0 0 10px #2299DD,0 0 5px #2299DD'
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
