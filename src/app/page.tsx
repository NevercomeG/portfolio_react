"use client"

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
        <main id='top' className='font-mono'>
          <Hero />
          <section id='projects' className=' '>
            <div className='text-center'>
              <h1 className='font-Roboto_mono text-5xl text-white '>
                Projects
              </h1>
              <h2>working in progress</h2>
            </div>
            <Projects />
            <h1 id='stack' className='pt-16  text-center text-5xl'>
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