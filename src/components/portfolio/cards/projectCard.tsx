// ProjectCard.tsx
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Link href={`/projects/${project.id}`} passHref>
    <div className='flex rounded-lg p-4 shadow-sm shadow-white'>
      <div className='flex flex-col'>
        <div className='relative h-56 w-full overflow-hidden rounded-md md:h-64 lg:h-80'>
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            loading='lazy'
            className='rounded-md'
          />
        </div>
        <div className='mt-2 p-4'>
          <dl>
            <div>
              <dt className='pb-6 text-lg md:text-xl'>{project.title}</dt>
              <dd className='text-sm md:text-base'>{project.description}</dd>
            </div>
          </dl>
          <div className='mt-6 flex items-center gap-8 text-xs md:text-sm'>
            <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
              <div className='flex flex-row items-center justify-center gap-2'>
                {project.Technology.Stack.map((language, index) => (
                  <>
                    <Icon
                      key={`icon-${index}`}
                      color='white'
                      className='h-4 w-4'
                      icon={`${project.Technology.Icons[index]}`}
                    />
                    <p key={`stack-${index}`}>
                      {language}
                      {index < project.Technology.Stack.length - 1 && ' |'}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
