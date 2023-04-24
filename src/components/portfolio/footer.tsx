import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';

import Nevercomex from '../global/nevercomex/copyright';

const Footer = () => {
  return (
    <section id='contact' className='font-Dm_Sans bg-gray3'>
      <div className='flex flex-col items-center py-16  text-white'>
        <div className='my-8 flex h-12 w-36 cursor-pointer items-center justify-center border hover:border-green'>
          <h1 className='text-2xl'>Hire Me</h1>
        </div>
        <div className='icons mb-8 flex space-x-10 text-3xl'>
          <a href='https://www.linkedin.com/in/luis-solano-a20683208/'>
            <IoLogoLinkedin
              href=''
              className='m-2 cursor-pointer duration-300  ease-in hover:text-green'
            />
          </a>
          <a href='https://github.com/NevercomeX'>
            <AiOutlineGithub className='m-2 cursor-pointer duration-300  ease-in hover:text-green' />
          </a>
        </div>
        <div className='flex flex-col gap-2 text-center tracking-wider'>
          All Rights are reserved <Nevercomex />
        </div>
      </div>
    </section>
  );
};

export default Footer;
