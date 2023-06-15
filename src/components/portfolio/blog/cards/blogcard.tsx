// ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

import { DevToArticle } from '../../types';

export default function ProjectCard({
  id,
  title,
  description,
  url,
  published_at,
  social_image,
}: DevToArticle) {
  return (
    <li>
      <Link
        href={url}
        key={id}
        className='flex w-[22rem] h-[23rem] flex-col items-center rounded-md border-[1px] border-[#818181] text-center shadow-md text-white font-sans '
      >
        <figure className='relative h-[23rem] w-[22rem]  overflow-hidden rounded-lg '>
          <Image
            src={social_image}
            alt={title}
            fill
            loading='lazy'
            className=' rounded-md  top-0 left-0 cursor-default px-4 pt-4 '
            style={{ objectFit: 'cover' }}
          />
        </figure>
        <div className='flex flex-col items-start p-4'>
          <div className='text-left font-bold '>
            <h1 className='text-lg md:text-xl '>{title}</h1>
          </div>

          <div className='text-left py-2'>
            <p className='text-base'>{description}</p>
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
