'use client';

import { ThemeProvider } from '@mui/material/styles';

import React, { useState } from 'react';
import { theme } from './Theme';
import { Project } from '@/types/ProyectTypes';

import ProjectCard from '@/components/ProjectsComponents/ProjectCard';

interface Props {
  projects: Project[];
  showAllProjects: boolean;
}

function ProjectGrid({ projects, showAllProjects }: Props) {
  const [showAll, setShowAll] = useState(showAllProjects);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Determine projects to display
  const projectsToDisplay = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <h1 className='py-12 text-center text-5xl text-white font-bold'>
        <span>PROJECTS</span>
      </h1>
      <ul className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projectsToDisplay.map((project, index) => (
          <div
            key={project.id}
            className={`transition-opacity duration-500 ease-in-out transform ${
              showAll || index < 3
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </ul>

      {/* Toggle Button for Showing All Projects */}
      {!showAll ? (
        <ThemeProvider theme={theme}>
          <div className='flex items-center justify-center pt-4'>
            <button
              onClick={toggleShowAll}
              className='my-4 flex h-12 w-44 cursor-pointer items-center justify-center border hover:border-green text-white rounded hover:bg-green-600 transition duration-300'
            >
              Show More Projects
            </button>
          </div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <div className='flex items-center justify-center pt-4'>
            <button
              onClick={toggleShowAll}
              className='my-4 flex h-12 w-44 cursor-pointer items-center justify-center border hover:border-green text-white rounded hover:bg-gray-600 transition duration-300'
            >
              Show Less
            </button>
          </div>
        </ThemeProvider>
      )}
      <div id='#projects'></div>
    </>
  );
}

export default React.memo(ProjectGrid);
