import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

// import heroImage from "../public/1.png";

const Hero = () => {
  return (
    <>
      <section
        id='header'
        className='font-Roboto_mono m-auto my-36 grid h-[75vh] w-8/12 md:w-11/12  lg:w-10/12 lg:grid-cols-2'
      >
        <div className='text-elements  relative hidden flex-col  text-white lg:inline-flex'>
          <div className='w-4/5 md:ml-2'>
            <div>
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
            </div>
            <div className='head mb-12 leading-12 sm:mb-8 sm:mt-4 md:mt-12 md:text-4xl lg:text-5xl'>
              <p>Innovative software</p>
              <p>Development</p>
            </div>
            <div className='desc mb-10 text-base opacity-60'>
              <p>Expertise in software development to keep</p>
              <p> you ahead of the curve.</p>
            </div>
            <Link href='/home'>
              <h3 className='mb-20 text-3xl md:mb-10'>
                Let&apos;s Chat:{' '}
                <span className='uppercase text-green  underline underline-offset-4'>
                  {' '}
                  Whatsapp
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
              <p className='mr-4 text-5xl lg:text-4xl'>32</p>
              <div className='opacity-75 sm:text-sm md:text-base'>
                Project completed <p> </p>
              </div>
            </div>
          </div>
        </div>
        <div className='inline-flex items-center justify-center'>
          <div className='flex flex-col items-center text-center lg:flex-row  lg:space-x-10'>
            <Image
              src='/assets/img/8bitpix.png'
              className='bg-black-50 rounded-full border-solid border-green shadow-2xl backdrop-blur-sm backdrop-brightness-75'
              alt=''
              width='200'
              height='200'
            />
            <div className=' flex  '>
              <h1 className='font-mono text-5xl leading-none    '>
                LUIS
                <span className='text-green'> CUEVAS</span>
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
