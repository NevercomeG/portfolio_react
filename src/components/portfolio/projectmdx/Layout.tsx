import { Inter } from 'next/font/google';
import React from 'react';

import Footer from '@/components/portfolio/footer/Footer';
import Navbar from '@/components/portfolio/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Navbar />
      <div className='px-8 sm:px-16 md:px-32 lg:px-64 flex flex-col justify-center'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
