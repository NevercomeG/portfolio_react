'use client';
// ProjectGrid.tsx

import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import React, { useMemo, useState } from 'react';

const BlogCard = dynamic(() => import('./blogcard'));

import { theme } from './Theme';

import { DevToArticlesProps } from '@/types/ProyectTypes';

function ProjectGrid({
  articles,
  showAllArticles,
  hidepagination,
}: DevToArticlesProps) {
  const [page, setPage] = useState(1);
  const articlesPerPage = showAllArticles ? articles.length : 3;

  const showPagination = hidepagination ? false : true;

  const displayedProjects = useMemo(
    () => articles.slice((page - 1) * articlesPerPage, page * articlesPerPage),
    [page, articles, articlesPerPage],
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
        {displayedProjects.map((articles) => (
          <BlogCard key={articles.id} {...articles} />
        ))}
      </ul>

      {!showPagination && (
        <ThemeProvider theme={theme}>
          <div className='flex items-center justify-center pt-4'>
            <Pagination
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
