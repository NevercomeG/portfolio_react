'use client';

import { Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import React, { useMemo, useState } from 'react';

const BlogCard = dynamic(() => import('./blogcard')); // Se puede renombrar si es necesario

import { theme } from './Theme';
import { Video } from '@/models/videosData'; // Usa el tipo `Video` en lugar de artículos

interface VideoGridProps {
  articles: Video[];
  showAllArticles: boolean;
  hidepagination?: boolean;
}

function ProjectGrid({
  articles,
  showAllArticles,
  hidepagination,
}: VideoGridProps) {
  const [page, setPage] = useState(1);
  const articlesPerPage = showAllArticles ? articles.length : 3;
  const showPagination = !hidepagination;

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
        {displayedProjects.map((video) => (
          <BlogCard key={video.id} {...video} /> // Pasar la data de video
        ))}
      </ul>

      {showPagination && (
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
