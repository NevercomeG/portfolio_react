'use client';

import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import { Project, Props } from '@/components/portfolio/cards/types';

import projectsData from '@/models/projects.json';

import ProjectCard from './projectCard';
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
      <div className='flex flex-wrap'>
        {displayedProjects.map((project) => (
          <div
            className='flex p-4 flex-row flex-1 justify-center'
            key={project.id}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              Technology={project.Technology}
              id={project.id}
              links={project.links}
              featured={project.featured}
              date={project.date}
              category={project.category}
            />
          </div>
        ))}
      </div>
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
