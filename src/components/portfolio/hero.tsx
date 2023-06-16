import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

// import heroImage from "../public/1.png";

const Hero = () => {
  return (
    <>
      <section className='m-auto grid h-[90vh] w-8/12 items-center justify-center md:w-11/12 lg:w-8/12 lg:grid-cols-2 '>
        <div className='relative hidden flex-col justify-center text-white lg:inline-flex'>
          <div className='w-4/5 md:ml-2'>
            <div className='leading-12 md:text-4xl lg:text-5xl font-sans font-bold'>
              <p className='animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-linear'>
                Hey!
              </p>
              <p>I'm Luis👋</p>
            </div>
            <div className='work inline-block rounded-xl bg-green p-1 sm:mb-3 sm:mt-4 md:mt-4 '>
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
            <div className='mb-4 text-base opacity-60'>
              <p>I specialize in the React Ecosystem</p>
              <p>as well as backend technologies like Node.js</p>
            </div>
            <Link href='/home'>
              <h3 className='mb-20 md:mb-4'>
                My Resume:{' '}
                <span className='uppercase text-green underline underline-offset-4'>
                  {' '}
                  See more
                </span>
              </h3>
            </Link>
          </div>
          <div className='experience flex space-x-8 pb-7 uppercase'>
            <div className='year flex items-center'>
              <p className='mr-4 text-5xl lg:text-4xl'>2</p>
              <div className='opacity-75 sm:text-sm md:text-base'>
                Years <p>of Experience</p>{' '}
              </div>
            </div>
            <div className='projects flex items-center justify-between'>
              <p className='mr-4 text-5xl lg:text-4xl'>16</p>
              <div className='opacity-75 sm:text-sm md:text-base'>
                Project completed <p> </p>
              </div>
            </div>
          </div>
        </div>
        <div className='items-center justify-center lg:inline-flex'>
          <div className='flex flex-col items-center text-center lg:flex-row lg:space-x-10'>
            <Image
              src='/assets/img/8bitpix.webp'
              className='bg-black-50 rounded-full border-solid border-green shadow-2xl backdrop-blur-sm backdrop-brightness-75'
              alt=''
              width='200'
              height='200'
              loading='lazy'
              priority={false}
            />
            <div className=' flex'>
              <h1 className='font-mono text-5xl leading-none'>
                LUIS
                <span className='text-green'> SOLANO</span>
              </h1>
            </div>
            <div className='text-gray-300 pt-2 lg:hidden'>
              <div className='work inline-block rounded-xl bg-green p-1'>
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
                Always learning new technologies. 💻
              </p>
            </div>
          </div>
          <div
            className='pointer-events-none absolute inset-x-0 bottom-0 top-auto w-full overflow-hidden'
            style={{ height: '70px' }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
