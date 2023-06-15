// ProjectGrid.tsx
import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

import projects from '@/src/src/pages/projects';

import ProjectCard from './blogcard';
import { theme } from './theme';
import { DevToArticlesProps } from '../../types';

function ProjectGrid({ articles, showAllArticles }: DevToArticlesProps) {
  const [page, setPage] = useState(1);
  const articlesPerPage = showAllArticles ? articles.length : 3;

  const displayedProjects = useMemo(
    () => articles.slice((page - 1) * articlesPerPage, page * articlesPerPage),
    [page, articles, articlesPerPage]
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
      <ul className='grid grid-rows-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
        {displayedProjects.map((articles) => (
          <ProjectCard key={articles.id} {...articles} />
        ))}
      </ul>
      {!showAllArticles && (
        <>
          <div className='flex pt-4 justify-start items-start '>
            <Link href='/blogs'>
              <button className='h-8 w-18 border-[1px] border-white p-2 flex justify-center items-center '>
                More Blogs
              </button>
            </Link>
          </div>
          <ThemeProvider theme={theme}>
            <div className='flex items-center justify-center pt-12'>
              <Pagination
                count={Math.ceil(projects.length / articlesPerPage)}
                variant='outlined'
                sx={{ bgcolor: '#fff', borderRadius: 2, text: '#fff' }}
                classes={{ root: 'pagination' }}
                page={page}
                onChange={handlePaginationChange}
              />
            </div>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default React.memo(ProjectGrid);
