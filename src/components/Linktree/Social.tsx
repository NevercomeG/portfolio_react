import Image from 'next/image';
import Link from 'next/link';

export default function Social({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
  space?: boolean;
}) {
  return (
    <ul
      className={`boxShadow flex  w-full items-center whitespace-normal rounded-sm p-1 transition-all hover:scale-105  ${
        title === 'Github'
          ? 'bg-[#333]'
          : title === 'Linkedin'
          ? 'bg-[#0077b5]'
          : title === 'Instagram'
          ? 'bg-[#F55376]'
          : title === 'Spotify'
          ? 'bg-[#1DB954]'
          : title === 'Ivoox'
          ? 'bg-[#FFB266]'
          : title === 'Apple Podcast'
          ? 'bg-[#B2A9D1]'
          : 'bg-slate-200'
      }  mb-3 max-w-3xl`}
    >
      <Link
        passHref={true}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center  justify-between text-center"
      >
        <li className=" relative flex h-12 grow-0  items-center p-0 ">
          {image && (
            <Image
              className="inline-block w-[42px] min-w-[42px] rounded-md"
              alt={title}
              src={image}
              width={100}
              height={100}
            />
          )}
        </li>
        <div className="flex w-full grow-[1] flex-col items-center justify-center ">
          <h1
            className={` font-bold   ${
              title === 'Tiktok' ? 'text-black' : 'text-white'
            }  text-lg `}
          >
            {title}
          </h1>
        </div>
        <div className=" relative flex h-12 grow-0  items-center p-0 ">
          {image && (
            <Image
              className="inline-block w-[42px] min-w-[42px] rounded-md"
              alt={title}
              src={image}
              width={100}
              height={100}
            />
          )}
        </div>
      </Link>
    </ul>
  );
}
