'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <main className='relative  flex flex-col items-center justify-center flex-1 z-[1] '>
      <section className='h-[90vh] w-full flex md:lg:space-x-12  items-center justify-center'>
        <article className='relative hidden flex-col justify-start items-start text-white lg:inline-flex'>
          <div className='leading-[3.6rem] md:text-4xl lg:text-6xl font-sans font-bold'>
            <p>💻</p>
          </div>
          <div className='inline-block sm:mb-3 sm:mt-4 md:mt-4 '>
            <Typewriter
              options={{
                strings: [
                  'Full Stack Web Developer',
                  'Video Editor',
                  'Chemical Engineer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 15,
              }}
            />
          </div>

          <div className='flex gap-2 text-2xl mb-20 md:mb-4'>
            <Link
              legacyBehavior
              aria-label='resume'
              href='/Resume.pdf'
              passHref
            >
              <a target='_blank' rel='noopener noreferrer'>
                My Resume:{' '}
                <span className=' text-green hover:underline underline-offset-4'>
                  {' '}
                  Here{' '}
                </span>
              </a>
            </Link>
          </div>

          <div className='flex space-x-8  pt-2'>
            <div className='year flex items-center'>
              <p className='mr-2 text-5xl lg:text-4xl'>
                {' '}
                <Icon icon='mdi:github' className='h-6 w-6' />
              </p>
              <a href='https://github.com/NevercomeX'>
                <p className='text-lg hover:underline'>Github</p>
              </a>
            </div>
            <div className='year flex items-center'>
              <p className='mr-2 text-5xl lg:text-4xl'>
                {' '}
                <Icon icon='mdi:linkedin' className='h-6 w-6' />
              </p>{' '}
              <a href='https://www.linkedin.com/in/luissolanoc/'>
                <p className='text-lg hover:underline'>Linkedin</p>
              </a>
            </div>
            <div className='year flex items-center'>
              <p className='mr-2 text-5xl lg:text-4xl'>
                {' '}
                <Icon icon='mdi:instagram' className='h-6 w-6' />
              </p>{' '}
              <a href='https://www.instagram.com/nevercomex/'>
                <p className='text-lg hover:underline'>Instagram</p>
              </a>
            </div>
          </div>
        </article>
        <div className='items-center justify-center flex flex-col lg:flex-row px-6'>
          <figure className='relative h-40 w-40 '>
            <Image
              src='/assets/img/pfp.webp'
              alt='pfp'
              fill
              priority={true}
              className='bg-black-50 rounded-full border-solid shadow-slate-500 shadow-2xl backdrop-blur-sm backdrop-brightness-75'
            />
          </figure>
          <div className='pt-4 lg:pt-0 lg:px-4 px-0'>
            <h1 className=' text-6xl text-center font-bold '>
              Luis
              <span className='text-green'> Javier</span>
            </h1>
          </div>

          <div className='flex justify-center flex-col text-center text-gray-300 pt-2 lg:hidden'>
            <div className='work inline-block rounded-xl p-1'>
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'DevOps Engineer',
                    'Cloud Engineer',
                    'Software Engineer',
                    'Web Developer',
                    'Chemical Engineer',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </div>
            <p className='text-md font-mono  '>
              Always learning new technologies.
            </p>
            <p>💻</p>
          </div>

          <div
            className='pointer-events-none absolute inset-x-0 bottom-0 top-auto w-full overflow-hidden'
            style={{ height: '70px' }}
          ></div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
