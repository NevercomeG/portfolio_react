import type { AppProps } from 'next/app';
import Script from 'next/script';

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
      <Script
        id='something'
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
          __html: `
(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='G-XC1JR9LET6';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/'
        `,
        }}
      ></Script>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
