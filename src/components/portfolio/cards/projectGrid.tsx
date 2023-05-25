"use client"

import { Icon } from '@iconify/react';
import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
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
      <section className='p-4 lg:p-10 grid grid-cols sm:grid-cols-1 xs: md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {displayedProjects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} passHref>

                <div className='rounded overflow-hidden shadow-lg'>
                  <img 
                    src={project.imageUrl}
                    alt={project.title}

                    className=' w-full' // Added this line
                  />

                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mountain</div>
                    <div>
                      <div className='pb-6 text-lg md:text-xl'>
                        {project.title}
                      </div>
                      <div className='text-sm md:text-base'>
                        {project.description}
                      </div>
                    </div>

                  <div className='mt-6 flex items-center gap-8 text-xs md:text-sm'>
                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <div className='flex flex-row items-center justify-center gap-2'>
                        {project.Technology.Stack.map((language, index) => (
                          <>
                            <Icon
                              key={`icon-${index}`}
                              color='white'
                              className=' h-4 w-4 '
                              icon={`${project.Technology.Icons[index]}`}
                            />
                            <p key={`stack-${index}`}>
                              {language}
                              {index < project.Technology.Stack.length - 1 &&
                                ' |'}
                            </p>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </Link>
        ))}
      </section>
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
