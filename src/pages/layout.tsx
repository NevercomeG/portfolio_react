import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'NevercomeX',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=''>
        <main>{children}</main>
      </body>
    </html>
  );
}
