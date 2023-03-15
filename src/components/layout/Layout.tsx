import * as React from 'react';

import Footer from '@/components/bcomponents/footer';
import Navbar from '@/components/bcomponents/navbar';

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
