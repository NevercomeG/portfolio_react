import { Inter } from 'next/font/google';
import React from 'react';

import Footer from '@/components/portfolio/footer/Footer';
import Navbar from '@/components/portfolio/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Navbar />
      <div className='px-8 sm:px-24 md:px-52 lg:px-1/4 flex flex-col justify-center'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
