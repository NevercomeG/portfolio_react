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
    setPage(value);
  }

  return (
    <>
      <section className='grid grid-rows-1 items-center justify-center gap-4 pt-24 md:grid-cols-2 lg:w-2/3 lg:grid-cols-3'>
        {displayedProjects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} passHref>
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
                    className='rounded-md ' // Added this line
                  />
                </div>
                <div className='mt-2 p-4'>
                  <dl>
                    <div>
                      <dt className='pb-6 text-lg md:text-xl'>
                        {project.title}
                      </dt>
                      <dd className='text-sm md:text-base'>
                        {project.description}
                      </dd>
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
