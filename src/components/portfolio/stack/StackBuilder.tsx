import Image from 'next/image';
import React from 'react';

import IconGrid from '@/components/portfolio/stack/IconGrid';
import { StackData } from '@/components/portfolio/stack/Types';

const StackBuilder = ({ stackData }: { stackData?: StackData[] }) => {
  if (!stackData || stackData.length === 0) {
    return null;
  }

  return (
    <section className='flex justify-center items-center px-32'>
      {stackData.map((data) => {
        const flexRowClass =
          data?.mainImagePosition === 'left' ? 'flex-row' : 'flex-row-reverse';

        return (
          <div
            key={data.title}
            className={`flex justify-center items-center w-1/2 flex-col lg:${flexRowClass} lg:justify-evenly`}
          >
            <div>
              <Image
                src={data?.mainImage}
                width={500}
                height={500}
                alt={data?.mainImageAlt}
              />
            </div>
            <div className='flex justify-center items-center flex-col'>
              <div className='flex w-full'>
                <h3 className='text-3.5xl lg:text-4xl'>
                  {data?.title} <span className='text-green'></span>
                </h3>
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
        );
      })}
    </section>
  );
};

export default StackBuilder;
