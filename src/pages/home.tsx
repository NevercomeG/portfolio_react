import React from 'react';

import Layout from '@/components/global/layout/Layout';
import Seo from '@/components/global/Seo';
import Backend from '@/components/portfolio/backend';
import Devops from '@/components/portfolio/devops';
import Formation from '@/components/portfolio/formation';
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
        <main className="font-mono">
          <Header />
          <section className="bg-[#131313] ">
            <h1 className="py-5 text-center text-5xl">WHAT I DO?</h1>
            <Frontend />
            <Backend />
            <Devops />
            <Projects />
            </section>
            <Formation />

        </main>
      </Layout>
    </>
  );
}
