'use client';

import { Icon } from '@iconify/react';
import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Project, Props } from '@/components/portfolio/cards/types';

import projectsData from '@/models/projects.json';

import { theme } from './theme';

const ProjectGrid: React.FC<Props> = () => {
  const projects: Project[] = projectsData.projects;
  const [page, setPage] = useState(1);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const projectsPerPage = 3;

  useEffect(() => {
    setDisplayedProjects(
      projects.slice((page - 1) * projectsPerPage, page * projectsPerPage)
    );
  }, [page, projects]);

  function handlePaginationChange(
    event: React.ChangeEvent<unknown>,
    value: number
  ) {
    event.preventDefault();
    // console.log('Event target:', event.target);
    setPage(value);
  }

  return (
    <>
      {displayedProjects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`} passHref>
          <div className='flex h-[25rem] w-[25rem] flex-col items-center  rounded-lg bg-[#fff] text-center shadow-md text-black'>
            <div className='relative mb-4 h-[30rem] w-[25rem] rounded-lg shadow-lg  drop-shadow'>
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className='rounded-t-lg '
              />
            </div>

            <div className='text-left px-4'>
              <p className='text-lg md:text-xl'>{project.title}</p>
              <p className='text-sm md:text-base'>{project.description}</p>
            </div>

            <div className='flex flex-row justify-between gap-10 p-4 items-center space-x-5'>
              <div className='flex flex-row items-center gap-2 '>
                <Icon
                  className=' h-4 w-4 text-green'
                  icon='icon-park-outline:eyes'
                />
                600,000
              </div>
              <div className='flex flex-row items-center gap-2 '>
                <Icon className=' h-4 w-4 text-green' icon='ri:time-line' />
                4min
              </div>
            </div>

            <div className='pb-4 flex items-center gap-8 text-xs md:text-sm'>
              <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                <div className='flex flex-row items-center justify-center gap-2'>
                  {project.Technology.Stack.map((language, index) => (
                    <>
                      <Icon
                        key={`icon-${index}`}
                        color='black'
                        className=' h-4 w-4 '
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
        </Link>
      ))}

      <ThemeProvider theme={theme}>
        <div className='flex items-center justify-center pt-12'>
          <Pagination
            count={Math.ceil(projects.length / projectsPerPage)}
            variant='outlined'
            color='primary'
            className='  w-3/2 items-center justify-center'
            sx={{ bgcolor: '#fff', borderRadius: 2, text: '#fff' }}
            page={page}
            onChange={handlePaginationChange}
          />
        </div>
      </ThemeProvider>
    </>
  );
};

export default ProjectGrid;
