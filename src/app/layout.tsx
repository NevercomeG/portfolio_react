import '@/styles/globals.css';

import FooterSection from '@/components/Footer';
import Seo from '@/components/global/Seo';
import NavBarSection from '@/components/Navs';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Seo />
      <body>
        <NavBarSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
