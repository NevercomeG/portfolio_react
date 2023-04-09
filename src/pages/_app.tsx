import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';

import '@fortawesome/fontawesome-svg-core/styles.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';
import '@/styles/globals.css';

config.autoAddCss = false;

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
