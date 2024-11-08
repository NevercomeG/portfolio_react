'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import { BackEndData, DevOpsData, FrontEndData } from '@/models/StackData';
const StackBuilder = dynamic(() => import('./StackBuilder'));

const StackSection: React.FC = () => {
  return (
    <section>
      <h1 className='pt-24 text-center text-5xl text-white font-bold'>
        MY STACK
      </h1>
      <div className='flex justify-center items-center flex-col lg:md:flex-row'>
        <StackBuilder stackData={FrontEndData} />
        <StackBuilder stackData={DevOpsData} />
        <StackBuilder stackData={BackEndData} />
      </div>
    </section>
  );
};

export default StackSection;
