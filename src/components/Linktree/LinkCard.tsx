import Image from 'next/image';
import Link from 'next/link';

export default function LinkCard({
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
    <ul className="mb-3 flex  w-full max-w-3xl items-center rounded-sm bg-gray-100 transition-all hover:scale-105   ">
      <Link
        passHref={true}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center  justify-between text-center"
      >
        <li className=" relative flex grow-0  items-center p-2">
          {image && (
            <Image
              className="rounded-md"
              alt={title}
              src={image}
              width={70}
              height={70}
            />
          )}
        </li>
        <div className="flex w-full grow-[1] flex-col items-center justify-center p-2">
          <h1 className=" text-lg  font-semibold text-gray-700 ">{title}</h1>
          <p className=" text-sm text-gray-700">{message}</p>
        </div>
        <div className="relative flex h-10 grow-0  items-center p-2">
          {image && (
            <Image
              className="rounded-md"
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
