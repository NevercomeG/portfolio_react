'use client';

import React from 'react';

import Layout from '@/components/global/layout/Layout';
// import Seo from '@/components/global/Seo';
import Backend from '@/components/portfolio/backend';
import Devops from '@/components/portfolio/devops';
import Frontend from '@/components/portfolio/frontend';
import Hero from '@/components/portfolio/hero';
import PopupWidget from '@/components/portfolio/popupWidget';
import Projects from '@/components/portfolio/projects';

export default function Landing() {
  return (
    <>
      <PopupWidget />
      <Layout>
        {/* <Seo /> */}
        <main id='top'>
          <Hero />
          <section id='projects'>
            <div className='text-center pb-8'>
              <h1 className='text-5xl text-white'>Projects</h1>
              <h2>working in progress</h2>
            </div>
            <Projects />
            <h1 id='stack' className='pt-32  text-center text-5xl'>
              MY <span className='text-green'>STACK</span>
            </h1>
            <Frontend />
            <Backend />
            <Devops />
          </section>
          {/* <Formation /> */}
        </main>
      </Layout>
    </>
  );
}
