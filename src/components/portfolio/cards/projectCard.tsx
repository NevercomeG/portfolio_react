// ProjectCard.tsx
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from './types';

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  id,
  imageUrl,
  Technology,
}) => {
  return (
    <Link href={`/home/projects/${id}`} passHref>
      <div className='flex w-[22rem] h-[23rem] flex-col items-center rounded-md border-[1px] border-[#818181] text-center shadow-md text-white font-sans '>
        <figure className='relative h-[23rem] w-[22rem]  overflow-hidden rounded-lg '>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className=' rounded-md  top-0 left-0 cursor-default px-4 pt-4 '
            style={{ objectFit: 'cover' }}
          />
        </figure>

        <div className='flex flex-col items-start p-4'>
          <div className='text-left font-bold '>
            <h4 className='text-lg md:text-xl '>{title}</h4>
          </div>
          <div className=' py-2 flex items-center gap-8 text-sm'>
            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
              <div className='flex flex-row items-center justify-center gap-2'>
                {Technology.Stack.map((language, index) => (
                  <>
                    <Icon
                      key={`icon-${index}`}
                      color='white'
                      className=' h-6 w-6 '
                      icon={`${Technology.Icons[index]}`}
                    />
                    <p key={`stack-${index}`}>
                      {index < Technology.Stack.length - 1 && ' | '}
                    </p>
                    <p className='hidden'>{language}</p>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className='text-left py-2'>
            <p className='text-base'>{description}</p>
          </div>

          <div className='text-left py-2 hover:underline'>
            <a href='' className='text-base'>
              See more →
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
