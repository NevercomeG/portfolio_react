import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
const Backend = () => {
  return (
    <section className='relative block md:pt-20   '>
      <div className='grid items-center justify-center lg:grid-flow-col '>
        <div className='m-4 lg:pr-28'>
          <h1 className={` mb-2 text-3.5xl lg:text-4xl`}>
            <span className='text-green'> Back-End</span> Development
          </h1>
          <div className='space-y-2 py-6  '>
            <div className='flex flex-row space-x-2 '>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
                  width={50}
                  height={50}
                  alt=''
                />
              </div>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'
                  width={50}
                  height={50}
                  alt=''
                />
              </div>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                  width={50}
                  height={50}
                  alt=''
                />
              </div>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg'
                  width={50}
                  height={50}
                  alt=''
                />
              </div>
            </div>
            <div className='flex flex-row space-x-2 pb-6'>
              <div className=' grid grid-flow-col space-x-2 lg:py-0'>
                <div className='black grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white'>
                  <Icon
                    color='black'
                    className='h-14 w-14'
                    icon='simple-icons:trpc'
                  />
                </div>
                <div className='black grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white'>
                  <Icon
                    icon='vscode-icons:file-type-light-prisma'
                    color='black'
                    className='h-14 w-14'
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className=' space-y-3 font-mono text-white'>
            <li>➖ Node.js, Express, Django, Prisma, Python.</li>
            <li>➖ MongoDB & MySQL.</li>
            <li>➖ REST API, GraphQL, TRPC.</li>
          </ul>
        </div>
        <div className='main__img--container'>
          <div className=''>
            <Image
              src='/assets/img/backend.svg'
              width={500}
              height={500}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backend;
