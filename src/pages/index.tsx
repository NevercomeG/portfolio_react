import React, { memo } from 'react';

import Layout from '@/components/global/layout/Layout';
import Seo from '@/components/global/Seo';
import DevtoList from '@/components/portfolio/blog/bloglist';
import Hero from '@/components/portfolio/hero/Hero';
import PopupWidget from '@/components/portfolio/popupWidget';
import Projects from '@/components/portfolio/projects/Projects';
import StackBuilder from '@/components/portfolio/stack/StackBuilder';

import { BackEndData, DevOpsData, FrontEndData } from '@/models/StackData';

const Landing = () => {
  return (
    <>
      <PopupWidget />
      <Layout>
        <Seo />
        <section id='top' className=''>
          <Hero />
          <section id='projects'>
            <div className='text-center pb-8'>
              <h1 className='text-5xl text-white font-bold'>Projects</h1>
              <h2>working in progress</h2>
            </div>
            <Projects />
            <p className='pt-32 text-center pb-8 text-5xl text-white font-bold'>
              <span className='text-green'> Dev.to</span> Blogs
            </p>
            <DevtoList />
            <h1
              id='stack'
              className='pt-32  text-center text-5xl text-white font-bold'
            >
              MY <span className='text-green'>STACK</span>
            </h1>
            <StackBuilder stackData={FrontEndData} />
            <StackBuilder stackData={BackEndData} />
            <StackBuilder stackData={DevOpsData} />
          </section>
        </section>
      </Layout>
    </>
  );
};

export default memo(Landing);
