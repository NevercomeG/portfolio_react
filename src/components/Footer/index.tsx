'use client';
import Link from 'next/link';
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';

import Nevercomex from '@/components/copyright';

const FooterSection = () => {
  return (
    <section id='contact' className='font-Dm_Sans pt-4 '>
      <div className='flex justify-center items-center'>
        <div className='w-[80%] text-center f h-[1px] bg-[#333333]'></div>
      </div>
      <div className='flex flex-col items-center py-8  text-white'>
        <div className='my-4 flex h-12 w-36 cursor-pointer items-center justify-center border hover:border-green'>
          <Link legacyBehavior aria-label='resume' href='/Resume.pdf' passHref>
            <a className='text-2xl' target='_blank' rel='noopener noreferrer'>
              Hire Me
            </a>
          </Link>
        </div>
        <div className='icons mb-8 flex space-x-10 text-3xl'>
          <a
            href='https://www.linkedin.com/in/luissolanoc/'
            aria-label='Linkedin'
          >
            <IoLogoLinkedin
              href=''
              className='m-2 cursor-pointer duration-300  ease-in hover:text-green'
            />
          </a>
          <a href='https://github.com/NevercomeX' aria-label='Nevercomex Page'>
            <AiOutlineGithub className='m-2 cursor-pointer duration-300  ease-in hover:text-green' />
          </a>
          <div className='year flex items-center'>
            <p className='mr-2 text-5xl lg:text-4xl'>
              {' '}
              <IoLogoInstagram className='h-6 w-6' />
            </p>{' '}
            <a href='https://www.instagram.com/nevercomex/'>
              <p className='text-lg hover:underline'></p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-2 text-center '>
          All Rights are reserved <Nevercomex />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
