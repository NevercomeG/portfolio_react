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
    <Link href={`/projects/${id}`} passHref>
      <div className='flex w-[20rem] lg:md:w-[25rem] flex-col items-center rounded-md bg-[#212121] text-center shadow-md text-white font-sans '>
        <figure className='relative h-[15rem] w-[20rem] lg:md:w-[25rem] rounded-t-md overflow-hidden'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className='rounded-t-md absolute top-0 left-0 cursor-default '
          />
        </figure>

        <div className='flex flex-col items-start p-4'>
          <div className='text-left font-bold '>
            <h4 className='text-lg md:text-xl '>{title}</h4>
          </div>

          <div className='flex flex-row justify-between py-2 items-center space-x-4'>
            <div className='flex flex-row items-center gap-2 '>
              <Icon className=' h-4 w-4 text-white' icon='ri:time-line' />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-slate-300'>
                4 min read
              </span>
            </div>

            <div className='flex flex-row items-center gap-2 '>
              <Icon
                className=' h-4 w-4 text-white'
                icon='icon-park-outline:eyes'
              />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-slate-300'>
                600,000 views
              </span>
            </div>
          </div>

          <div className=' py-2 flex items-center gap-8 text-sm'>
            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
              <div className='flex flex-row items-center justify-center gap-2'>
                {Technology.Stack.map((language, index) => (
                  <>
                    <Icon
                      key={`icon-${index}`}
                      color='white'
                      className=' h-4 w-4 '
                      icon={`${Technology.Icons[index]}`}
                    />
                    <p key={`stack-${index}`}>
                      {language}
                      {index < Technology.Stack.length - 1 && ' | '}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className='text-left py-2'>
            <p className='text-base'>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
