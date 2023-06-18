import dynamic from 'next/dynamic';
import React, { memo } from 'react';

import Layout from '@/components/global/layout/Layout';

const Seo = dynamic(() => import('@/components/global/Seo'));
const DevtoList = dynamic(() => import('@/components/portfolio/blog/bloglist'));
const Hero = dynamic(() => import('@/components/portfolio/hero/Hero'));
const PopupWidget = dynamic(() => import('@/components/portfolio/popupWidget'));
const Projects = dynamic(
  () => import('@/components/portfolio/projects/Projects')
);
const StackBuilder = dynamic(
  () => import('@/components/portfolio/stack/StackBuilder')
);

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
