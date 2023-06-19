import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

// import heroImage from "../public/1.png";

const Hero = () => {
  return (
    <main className='relative  flex flex-col items-center justify-center flex-1 z-[1] '>
      <section className='w-full'>
        <div className='h-[90vh] w-full flex md:lg:space-x-12  items-center justify-center'>
          <div className='relative hidden flex-col justify-start items-start text-white lg:inline-flex'>
            <div className='text-left'>
              <div className='leading-[3.6rem] md:text-4xl lg:text-6xl font-sans font-bold'>
                <p className='animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-linear'>
                  Hey!
                </p>
                <p>I'm Luis👋</p>
              </div>
              <div className='work inline-block rounded- p-1 sm:mb-3 sm:mt-4 md:mt-4 '>
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'Software Developer',
                      'Web Developer',
                      'Chemical Engineer',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 15,
                  }}
                />
              </div>
              <div className='mb-4 text-2xl opacity-60'>
                <p>I specialize in the React Ecosystem</p>
                <p>as well as backend technologies like Node.js</p>
              </div>
              <Link href='/home'>
                <h3 className='text-2xl mb-20 md:mb-4'>
                  My Resume:{' '}
                  <span className='uppercase text-green hover:underline underline-offset-4'>
                    {' '}
                    See more
                  </span>
                </h3>
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
                  <Icon icon='mdi:twitter' className='h-6 w-6' />
                </p>{' '}
                <a href=''>
                  <p className='text-lg hover:underline'>Twitter</p>
                </a>
              </div>
            </div>
          </div>
          <div className='items-center justify-center flex flex-col lg:flex-row px-6'>
            <figure className='relative h-40 w-40 '>
              <Image
                src='/assets/img/pfp.webp'
                alt='pfp'
                fill
                priority={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='bg-black-50 rounded-full border-solid shadow-slate-500 shadow-2xl backdrop-blur-sm backdrop-brightness-75'
              />
            </figure>
            <div className='pt-4 lg:pt-0 lg:px-4 px-0'>
              <h1 className=' text-5xl text-center font-bold '>
                LUIS
                <span className='text-green'> SOLANO</span>
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
        </div>
      </section>
    </main>
  );
};

export default Hero;
