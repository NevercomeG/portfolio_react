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
        className='py-32  text-center text-5xl text-white font-bold'
      >
        My <span className='text-green'>Stack</span>
      </h1>
      <div className='grid grid-rows-1 lg:grid-cols-3'>
        <StackBuilder stackData={FrontEndData} />
        <StackBuilder stackData={DevOpsData} />
        <StackBuilder stackData={BackEndData} />
      </div>
    </section>
  );
};

export default StackSection;
