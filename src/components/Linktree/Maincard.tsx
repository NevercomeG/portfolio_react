import Image from 'next/image';
import Link from 'next/link';

export default function Maincard({
  href,
  title,
  image,
  message,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
  space?: boolean;
  flechita?: boolean;
}) {
  return (
    <ul className='mb-3 flex  w-full max-w-3xl items-center rounded-sm bg-[#222] shadow-lg shadow-white transition-all hover:scale-105 '>
      <Link
        passHref={true}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='flex w-full items-center  justify-between text-center'
      >
        <li className=' relative flex flex-grow-0  items-center p-2'>
          {image && (
            <Image
              className='rounded-md'
              alt={title}
              src={image}
              width={70}
              height={70}
            />
          )}
        </li>
        <div className='flex w-full flex-grow-[1] flex-col items-center justify-center p-2'>
          <h1 className=' text-lg  font-semibold text-white '>{title}</h1>
          <p className=' text-sm text-white'>{message}</p>
        </div>
        <div className='relative flex h-10 flex-grow-0  items-center p-2'>
          {image && (
            <Image
              className='rounded-md'
              alt={title}
              src={image}
              width={70}
              height={70}
            />
          )}
        </div>
      </Link>
    </ul>
  );
}
