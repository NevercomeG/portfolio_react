'use client';
import Link from 'next/link';
import { VideoType } from '@/types/VideoEditingTypes'; // Importa el tipo de video

export default function BlogCard({
  id,
  title,
  description,
  url,
  thumbnail,
}: VideoType) {
  return (
    <li className='max-w-sm rounded overflow-hidden shadow-lg px-4'>
      <figure className=''>
        <img src={thumbnail} alt={title} className='w-full rounded-t-lg' />
      </figure>
      <div className='px-2 py-4'>
        <div className='font-bold text-xl mb-2'>{title.slice(0, 30)}</div>
        <p className='text-gray-700 text-base'>{description.slice(0, 70)}...</p>
      </div>
      <div className='px-2 pb-4'>
        <div className='flex justify-between'>
          <Link
            href={url}
            key={id}
            className='group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600 '
          >
            <span>▷</span>
            <span className='underline'>Watch Now</span>
          </Link>
        </div>
      </div>
    </li>
  );
}
