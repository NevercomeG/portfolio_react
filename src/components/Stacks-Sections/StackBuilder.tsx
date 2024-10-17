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
    <section className='flex justify-center items-center '>
      {stackData.map((data) => (
        <div
          key={data.title}
          className='flex justify-center items-center w-2/3 flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'
        >
          <div className=' flex justify-center items-center'></div>
          <div className='flex justify-center items-center flex-col px-4'>
            <div className='flex w-full'>
              <h1 className='text-3.5xl lg:text-4xl'>{data?.title}</h1>
            </div>
            <div className='space-y-2 py-2'>
              <IconGrid data={data?.icons} />
              <div>
                <ul className='space-y-3 font-mono text-white'>
                  {data?.detailedSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StackBuilder;
