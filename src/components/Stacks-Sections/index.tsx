'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import { BackEndData, DevOpsData, FrontEndData } from '@/models/StackData';
const StackBuilder = dynamic(() => import('./StackBuilder'));

const StackSection: React.FC = () => {
  return (
    <section>
      <h1
        id='stack'
        className='pt-32  text-center text-5xl text-white font-bold'
      >
        My <span className='text-green'>Stack</span>
      </h1>
      <StackBuilder stackData={FrontEndData} />
      <StackBuilder stackData={BackEndData} />
      <StackBuilder stackData={DevOpsData} />
    </section>
  );
};

export default StackSection;
