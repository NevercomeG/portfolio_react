import Image from 'next/image';
import Link from 'next/link';

interface BaseCardProps {
  href: string;
  title: string;
  image?: string;
  message?: string;
  bgColor?: string; // Custom background color (e.g., for social media)
  textColor?: string; // Custom text color
}

export default function BaseCard({
  href,
  title,
  image,
  message,
  bgColor = 'bg-gray', // Default color if none provided
  textColor = 'text-gray', // Default text color
}: BaseCardProps) {
  return (
    <ul
      className={`${bgColor} mb-3 flex w-full max-w-3xl rounded-sm transition-all hover:scale-105 shadow-lg`}
    >
      <li className='w-full'>
        <Link
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='flex w-full items-center justify-between text-center'
        >
          {image && (
            <div className='flex grow-0 items-center p-2'>
              <Image
                className='rounded-md'
                alt={title}
                src={image}
                width={70}
                height={70}
              />
            </div>
          )}
          <div className='flex w-full grow flex-col items-center justify-center p-2'>
            <h1 className={`text-3xl font-semibold ${textColor}`}>{title}</h1>
            {message && <p className={`text-sm ${textColor}`}>{message}</p>}
          </div>
        </Link>
      </li>
    </ul>
  );
}
