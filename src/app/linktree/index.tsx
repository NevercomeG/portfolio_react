'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Typewriter = dynamic(() => import('typewriter-effect'));
const LinkCard = dynamic(() => import('@/components/Linktree/LinkCard'));
const Maincard = dynamic(() => import('@/components/Linktree/Maincard'));
const Social = dynamic(() => import('@/components/Linktree/Social'));

const Nevercomex = dynamic(
  () => import('@/components/global/nevercomex/copyright'),
);

import data from '@/models/data.json';

// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
export default function Linktree({
  className,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
  space?: boolean;
  flechita?: boolean;
  className?: string;
}) {
  return (
    <>
      <body className='box-border block h-full w-full '>
        <div
          className={`${className} mx-auto flex h-full w-full flex-col items-center justify-center px-4 pt-12 text-center  `}
        >
          <figure className='   m-0 flex w-full justify-center px-[10px] py-0 text-center align-middle '>
            <Image
              className='box-content h-[150px] w-[150px] rounded-[150px] object-cover   '
              src={data.avatar}
              alt=''
              width={150}
              height={150}
            />
          </figure>

          <h1 className='mt-2  text-3xl font-bold text-white'>{data.name}</h1>
          <h1 className='text- mb-2 text-sm font-thin italic text-white'>
            "Todo lo que quieres esta al otro lado del miedo".
          </h1>
          <div className=' text-bold shadow-gray-400 mb-4  font-mono text-xl text-white shadow-lg'>
            <Typewriter
              options={{
                strings: [
                  '⠀Full Stack Developer',
                  '⠀DevOps Engineer',
                  '⠀Cloud Engineer',
                  '⠀Software Engineer',
                  '⠀Web Developer',
                  '⠀Chemical Engineer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>
          {data.maincard.map((link) => (
            <Maincard key={link.href} {...link} />
          ))}
          {/* <div
          className={` mb-3 flex  max-h-[0] w-full max-w-[100px]  items-center rounded-sm bg-gray-100 p-1 text-lg `}
        ></div> */}
          {/* <h2 className='pb-2 text-white'>
          Empieza Aquí <br /> 👇
        </h2> */}
          {data.links.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
          {/* <div
          className={` mb-3 flex  max-h-[0] w-full max-w-[100px]  items-center rounded-sm bg-gray-100 p-1 text-lg `}
        ></div> */}
          {data.socials.map((link) => (
            <Social key={link.href} {...link} />
          ))}

          <div
            className={` bg-gray-100  mb-6 flex max-h-[0]  w-full max-w-[100px] items-center rounded-sm p-1 text-lg `}
          ></div>

          <Nevercomex classNames='py-8' divhidden={false} />
        </div>
      </body>
    </>
  );
}
