import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Formation from '../components/bcomponents/formation';
import Header from '../components/bcomponents/header';
import Projects from '../components/bcomponents/projects';
import Backend from '../components/scomponents/backend';
import Devops from '../components/scomponents/devops';
// import Form from '../components/scomponents/form';
import Frontend from '../components/scomponents/frontend';

export default function Landing() {
  return (
    <>
      <Layout>
        <Seo />
        <main className='font-mono'>
          <Header />
          <section className='bg-[#131313] '>
            <h1 className='py-5 text-center text-5xl'>WHAT I DO?</h1>
            <Frontend />
            <Backend />
            <Devops />
            <Projects />
            <Formation />
            {/* <Form /> */}
          </section>
        </main>
      </Layout>
    </>
  );
}
