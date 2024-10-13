import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/globals.css';
export const metadata: Metadata = {
  title: 'Luis Javier 💻',
  metadataBase: new URL('https://ljjs.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    siteName: 'Portfolio Luis Javier',
    url: 'https://ljjs.com',
    type: 'website',
  },

  description:
    'Explore the diverse range of projects developed by a skilled full-stack and DevOps developer proficient in TypeScript and React. Discover cutting-edge web applications, intuitive user interfaces, and robust backend systems that showcase a passion for software engineering and problem-solving. Experience the power of TypeScript and React in action and see how they elevate the user experience to new heights.',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */

  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
