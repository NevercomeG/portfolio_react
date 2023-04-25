import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { IoLogoLinkedin } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [isMobile, setMobile] = useState(false);

  return (
    <section className=' fixed left-0 top-0 z-50 flex w-full backdrop-blur backdrop-brightness-50 '>
      <div className=' flex h-20  w-full items-center justify-between p-4 text-white'>
        <Link href='/home'>
          <div className='name m-0 cursor-pointer p-0 text-3xl font-semibold md:text-2xl'>
            <span className='font-Dm_Sans text-green  duration-200 ease-in'>
              LUIS{' '}
            </span>
            <span>CUEVAS</span>
          </div>
        </Link>
        <div
          className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${
            isMobile ? 'block' : 'hidden'
          }`}
          onClick={() => setMobile(false)}
        >
          <div className='text-sm lg:flex-grow'>
            <Link href='#stack' className='flex items-center'>
              <BiChevronLeft className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
              <span className='opacity-90 duration-200 ease-in hover:font-medium hover:text-green'>
                My Stack
              </span>
              <BiChevronRight className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
            </Link>
            <Link href='#projects' className='flex items-center'>
              <BiChevronLeft className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
              <span className='opacity-90 duration-200 ease-in hover:font-medium hover:text-green'>
                Projects
              </span>
              <BiChevronRight className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
            </Link>
            <Link href='#contact' className='flex items-center'>
              <BiChevronLeft className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
              <span className='opacity-90 duration-200 ease-in hover:font-medium hover:text-green'>
                Contacts
              </span>
              <BiChevronRight className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
            </Link>
          </div>
        </div>
        <div className=' flex items-center space-x-5 '>
          <a href='https://www.linkedin.com/in/luis-solano-a20683208/'>
            <div className='twitter flex cursor-pointer items-center space-x-2'>
              <IoLogoLinkedin className='text-2xl hover:text-green' />{' '}
              <span className='hidden opacity-60 hover:opacity-100 md:opacity-100 md:hover:opacity-100 lg:block'>
                Linkedin
              </span>
            </div>
          </a>
          <a href='https://github.com/NevercomeX'>
            <div className='github flex cursor-pointer items-center space-x-2'>
              <AiOutlineGithub className='text-2xl hover:text-green' />{' '}
              <span className='hidden opacity-60 hover:opacity-100 md:opacity-100 md:hover:opacity-100 lg:block'>
                Github
              </span>
            </div>
          </a>
          <RxHamburgerMenu
            className='text-2xl lg:hidden'
            onClick={() => setMobile(!isMobile)}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
