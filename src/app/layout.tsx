import '@/styles/globals.css';

import Seo from '@/components/global/Seo';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Seo />
      <body>{children}</body>
    </html>
  );
}
