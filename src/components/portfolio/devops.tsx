import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

const Devops = () => {
  return (
    <section className='relative block md:pt-20    '>
      <div className='flex flex-col-reverse items-center justify-center  lg:grid lg:grid-flow-col '>
        <div className=''>
          <Image src='/assets/img/vercel.svg' width={500} height={500} alt='' />
        </div>
        <div className='m-4 lg:pl-44'>
          <h1 className=' mb-2 text-3.5xl lg:text-4xl'>&gt; DevOps</h1>
          <div className='space-y-2 py-6'>
            <div className=' flex flex-row space-x-2'>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Icon
                  color='#0080FF'
                  className='h-12 w-12'
                  icon='mdi:digital-ocean'
                />
              </div>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Icon
                  color='black'
                  className='h-14 w-14'
                  icon='vscode-icons:file-type-docker'
                />
              </div>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Icon
                  color='black'
                  className='h-12 w-12'
                  icon='logos:kubernetes'
                />
              </div>

              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white '>
                <Icon
                  color='black'
                  className='h-12 w-12'
                  icon='logos:google-cloud'
                />
              </div>
            </div>
            <div className='flex flex-row space-x-2 pb-6'>
              <div className=' grid grid-flow-col space-x-2 lg:py-0'>
                <div className='black grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white'>
                  <Icon
                    color='black'
                    className='h-12 w-12'
                    icon='logos:github-actions'
                  />
                </div>
                <div className='black grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white'>
                  <Icon icon='logos:aws' color='black' className='h-12 w-12' />
                </div>
              </div>
            </div>

            <ul className=' space-y-3 font-mono text-white '>
              <li>&gt; AWS, GCP, Azure, Digital Ocean, Heroku, Vercel, etc.</li>
              <li>&gt; Docker, Kubernetes, Nginx, etc.</li>
              <li>&gt; Github. </li>
              <li>&gt; Linux & Windows.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devops;
