import * as React from 'react';

import Footer from '@/components/portfolio/footer';
import Navbar from '@/components/portfolio/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
