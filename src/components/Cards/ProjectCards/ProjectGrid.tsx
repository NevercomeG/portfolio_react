'use client';

// ProjectGrid.tsx
import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import React, { useMemo, useState } from 'react';

const ProjectCard = dynamic(() => import('./ProjectCard'));

import { theme } from './Theme';

import { Project } from '@/types/ProyectTypes';

interface Props {
  projects: Project[];
  showAllProjects: boolean;
  hidebutton?: boolean;
  hidepagination?: boolean;
}

function ProjectGrid({
  projects,
  showAllProjects,

  hidepagination,
}: Props) {
  const [page, setPage] = useState(1);
  const projectsPerPage = showAllProjects ? projects.length : 3;

  const showPagination = hidepagination ? false : true;

  const displayedProjects = useMemo(
    () => projects.slice((page - 1) * projectsPerPage, page * projectsPerPage),
    [page, projects, projectsPerPage],
  );

  function handlePaginationChange(
    event: React.ChangeEvent<unknown>,
    value: number,
  ) {
    event.stopPropagation();
    setPage(value);
  }

  return (
    <>
      <ul className='grid grid-rows-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>

      {showPagination && (
        <ThemeProvider theme={theme}>
          <div className='flex items-center justify-center pt-4'>
            <Pagination
              count={Math.ceil(projects.length / projectsPerPage)}
              variant='outlined'
              sx={{ bgcolor: '#fff', borderRadius: 2, text: '#fff' }}
              classes={{ root: 'pagination' }}
              page={page}
              onChange={handlePaginationChange}
            />
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default React.memo(ProjectGrid);
