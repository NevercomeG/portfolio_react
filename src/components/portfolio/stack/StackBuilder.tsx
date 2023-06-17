import Image from 'next/image';
import { useMemo } from 'react';
import React from 'react';

import IconGrid from '@/components/portfolio/stack/IconGrid';
import { IconData, StackData } from '@/components/portfolio/stack/Types';

const MemoizedIconGrid = ({ data }: { data?: IconData[] }) => {
  return useMemo(() => <IconGrid data={data} />, [data]);
};

const StackBuilder = ({ stackData }: { stackData?: StackData[] }) => {
  if (!stackData || stackData.length === 0) {
    return null;
  }

  const data: StackData | undefined = stackData[0];

  const flexRowClass =
    data?.mainImagePosition === 'left' ? 'flex-row' : 'flex-row-reverse';

  return (
    <section className='flex justify-center items-center px-32'>
      <div
        className={`flex justify-center items-center w-full flex-col lg:${flexRowClass} lg:justify-evenly`}
      >
        {stackData.map((data) => (
          <div key={data.title}>
            <Image
              src={data?.mainImage}
              width={500}
              height={500}
              alt={data?.mainImageAlt}
            />
          </div>
        ))}
        <div className='flex justify-center items-center flex-col'>
          <div className='flex w-full'>
            <h3 className='text-3.5xl lg:text-4xl'>
              {data?.title} <span className='text-green'></span>
            </h3>
          </div>
          <div className='space-y-2 py-2'>
            <MemoizedIconGrid data={data?.icons} />
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
    </section>
  );
};

export default StackBuilder;
