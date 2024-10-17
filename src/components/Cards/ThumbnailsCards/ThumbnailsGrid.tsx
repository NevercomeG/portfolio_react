import React from 'react';
import dynamic from 'next/dynamic';

const ProjectCard = dynamic(() => import('./ThumbnailsCard'));

import { thumbnail } from '@/types/ThumbnailsTypes';

interface ThumbnailsGridProps {
  thumbnails: thumbnail[];
  showAllThumbnails: boolean;
}

function ThumbnailsGrid({
  thumbnails,
  showAllThumbnails,
}: ThumbnailsGridProps) {
  const displayedThumbnails = showAllThumbnails
    ? thumbnails
    : thumbnails.slice(0, 3);

  return (
    <div className='grid grid-rows-1 md:grid-cols-1 lg:grid-cols-3 gap-9 lg:mx-32'>
      {displayedThumbnails.map((thumbnail) => (
        <ul
          key={thumbnail.id}
          className='transform transition duration-300 hover:scale-105' // Efecto de hover
        >
          <ProjectCard {...thumbnail} />
        </ul>
      ))}
    </div>
  );
}

export default React.memo(ThumbnailsGrid);
