import { Inter } from 'next/font/google';
import React from 'react';

import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <NavBarSection />
      <div className='px-8 sm:px-24 md:px-52 lg:px-1/4 flex flex-col justify-center'>
        {children}
      </div>
      <FooterSection />
    </div>
  );
}
