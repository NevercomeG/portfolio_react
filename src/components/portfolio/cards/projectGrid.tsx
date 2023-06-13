
// ProjectGrid.tsx
import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { useCallback,useMemo ,useState } from 'react';

import { Project } from '@/components/portfolio/cards/types';

import ProjectCard from './projectCard';
import { theme } from './theme';


interface Props {
  projects: Project[];
  showAllProjects: boolean;
}

function ProjectGrid({ projects, showAllProjects }: Props) {
  const [page, setPage] = useState(1);
  const projectsPerPage = showAllProjects ? projects.length : 3;

  const displayedProjects = useMemo(
    () => projects.slice((page - 1) * projectsPerPage, page * projectsPerPage),
    [page, projects, projectsPerPage]
  );

  function handlePaginationChange(
    event: React.ChangeEvent<unknown>,
    value: number
  ) {
    event.stopPropagation();
    setPage(value);
  }

  return (
    <>
      <ul className='grid grid-cols-3 gap-4'>
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
      {!showAllProjects && (
        <ThemeProvider theme={theme}>
          <div className='flex items-center justify-center pt-12'>
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

type PaginationReturnType = {
  page: number;
  handlePaginationChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

function usePagination(): PaginationReturnType {
  const [page, setPage] = useState(1);

  const handlePaginationChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      event.stopPropagation();
      setPage(value);
    },
    []
  );

  return { page, handlePaginationChange };
}

export default React.memo(ProjectGrid);