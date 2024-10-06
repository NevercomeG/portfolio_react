'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Video } from '@/models/videosData'; // Importa el tipo de video

export default function BlogCard({
  id,
  title,
  description,
  url,
  published_at,
  thumbnail,
}: Video) {
  return (
    <li>
      <Link
        href={url}
        key={id}
        className='flex w-[22rem] h-[23rem] flex-col items-center rounded-md border-[1px] border-[#818181] text-center shadow-md text-white font-sans '
      >
        <figure className='relative h-[23rem] w-[22rem] overflow-hidden rounded-lg '>
          <Image
            src={thumbnail}
            alt={title}
            fill
            loading='eager'
            className='rounded-md top-0 left-0 cursor-default px-4 pt-4 '
            style={{ objectFit: 'contain' }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </figure>
        <div className='flex flex-col items-start pt-2 px-4'>
          <div className='text-left font-bold '>
            <h1 className='text-lg md:text-xl '>{title.slice(0, 30)}</h1>
          </div>

          <div className='text-left py-2'>
            <p className='text-base'>{description.slice(0, 75)}...</p>
          </div>

          <div className='text-left py-2 hover:underline'>
            <p className='text-base'>See more →</p>
          </div>
          <div className='text-left py-2 italic'>
            <p className='text-sm'>{published_at}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
