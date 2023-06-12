// ProjectGrid.tsx
import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import { Project, Props } from '@/components/portfolio/cards/types';

import ProjectCard from './projectCard';
import { theme } from './theme';

const ProjectGrid: React.FC<Props> = ({ projects, showAllProjects }) => {
  const [page, setPage] = useState(1);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const projectsPerPage = showAllProjects ? projects.length : 3;

  useEffect(() => {
    setDisplayedProjects(
      projects.slice((page - 1) * projectsPerPage, page * projectsPerPage)
    );
  }, [page, projects, projectsPerPage]);

  function handlePaginationChange(
    event: React.ChangeEvent<unknown>,
    value: number
  ) {
    event.preventDefault();
    setPage(value);
  }

  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {displayedProjects.map((project) => (
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
        ))}
      </div>
      {!showAllProjects && (
        <ThemeProvider theme={theme}>
          <div className='flex items-center justify-center pt-12'>
            <Pagination
              count={Math.ceil(projects.length / projectsPerPage)}
              variant='outlined'
              color='primary'
              className='w-3/2 items-center justify-center'
              sx={{ bgcolor: '#fff', borderRadius: 2, text: '#fff' }}
              page={page}
              onChange={handlePaginationChange}
            />
          </div>
        </ThemeProvider>
      )}
    </>
  );
};

export default ProjectGrid;
