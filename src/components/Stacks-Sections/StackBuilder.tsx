'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const IconGrid = dynamic(() => import('./IconGrid'));

import { StackData } from '@/types/StacksTypes';

const StackBuilder = ({ stackData }: { stackData?: StackData[] }) => {
  if (!stackData || stackData.length === 0) {
    return null;
  }

  return (
    <>
      {stackData.map((data) => (
        <section key={data.title} className='px-2 lg:px-6 py-12 '>
          <div className='flex w-full '>
            <h1 className='text-center text-white font-bold text-3.5xl'>
              {data?.title}
            </h1>
          </div>
          <div className='space-y-2 py-2'>
            <IconGrid data={data?.icons} />
          </div>
          <div>
            <ul className='space-y-3 font-mono text-white'>
              {data?.detailedSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
};

export default StackBuilder;
