'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Typewriter = dynamic(() => import('typewriter-effect'));
const LinkCard = dynamic(() => import('@/components/Linktree/LinkCard'));
const Maincard = dynamic(() => import('@/components/Linktree/Maincard'));
const Social = dynamic(() => import('@/components/Linktree/Social'));

const Nevercomex = dynamic(() => import('@/components/copyright'));

import data from '@/models/data.json';

export default function Linktree() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 pt-12 text-center'>
      <figure className='flex w-full justify-center'>
        <Image
          className='h-[150px] w-[150px] rounded-full object-cover'
          src={data.avatar}
          alt={data.name}
          width={150}
          height={150}
        />
      </figure>

      <h1 className='mt-4 text-3xl font-bold text-white'>{data.name}</h1>
      <p className='text-sm italic text-gray-300'>
        "Everything you want is on the other side of fear."
      </p>

      <div className='mt-4 mb-8 font-mono text-xl text-gray-400'>
        <Typewriter
          options={{
            strings: [
              '⠀Full Stack Developer',
              '⠀Web Developer',
              '⠀Chemical Engineer',
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>

      {/* Main Card Section */}
      {data.maincard.map((link) => (
        <Maincard key={link.href} {...link} />
      ))}

      <h2 className='my-6 text-xl font-bold text-white'>
        MORE! <br /> 👇
      </h2>

      {/* Links Section */}
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

      {/* Social Links */}
      <ul className='mt-6 flex flex-wrap justify-center'>
        {data.socials.map((link) => (
          <Social key={link.href} {...link} />
        ))}
      </ul>

      {/* Footer */}
      <Nevercomex classNames='py-8' divhidden={false} />
    </div>
  );
}
