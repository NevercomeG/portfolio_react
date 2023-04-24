import React from 'react';

import Layout from '@/components/global/layout/Layout';
import Seo from '@/components/global/Seo';
import Backend from '@/components/portfolio/backend';
import Devops from '@/components/portfolio/devops';
import Frontend from '@/components/portfolio/frontend';
import Header from '@/components/portfolio/header';
import PopupWidget from '@/components/portfolio/popupWidget';
import Projects from '@/components/portfolio/projects';

export default function Landing() {
  return (
    <>
      <PopupWidget />
      <Layout>
        <Seo />
        <main id='top' className='font-mono'>
          <Header />
          <section id='stack' className='bg-[#131313] '>
            <h1 className='pt-16  text-center text-5xl'>
              MY <span className='text-green'>STACK</span>
            </h1>
            <Frontend />
            <Backend />
            <Devops />
            <Projects />
          </section>
          {/* <Formation /> */}
        </main>
      </Layout>
    </>
  );
}
