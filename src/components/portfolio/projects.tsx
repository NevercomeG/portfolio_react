import { useCallback, useEffect, useState } from 'react';

import { getProjectsData } from '@/models/projectsData';

import ProjectGrid from './cards/projectGrid';
import { Project } from './cards/types';

export default function Formation() {
  return <ProjectGridWrapper />;
}

function ProjectGridWrapper() {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const projectsData = await getProjectsData();
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className='flex flex-col items-center justify-center'>
      <ProjectGrid projects={projects} showAllProjects={false} />
    </section>
  );
}
