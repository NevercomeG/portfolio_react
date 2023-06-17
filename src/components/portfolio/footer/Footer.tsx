import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';

import Nevercomex from '../../global/nevercomex/copyright';

const Footer = () => {
  return (
    <section id='contact' className='font-Dm_Sans pt-4 '>
      <div className='flex justify-center items-center'>
        <div className='w-[80%] text-center f h-[1px] bg-[#333333]'></div>
      </div>
      <div className='flex flex-col items-center py-8  text-white'>
        <div className='my-4 flex h-12 w-36 cursor-pointer items-center justify-center border hover:border-green'>
          <h1 className='text-2xl'>Hire Me</h1>
        </div>
        <div className='icons mb-8 flex space-x-10 text-3xl'>
          <a
            href='https://www.linkedin.com/in/luis-solano-a20683208/'
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
        </div>
        <div className='flex flex-col gap-2 text-center '>
          All Rights are reserved <Nevercomex />
        </div>
      </div>
    </section>
  );
};

export default Footer;
