import projectsData from '@/models/projects.json';

import ProjectGrid from './cards/projectGrid';
import { Project } from './cards/types';

const projects: Project[] = projectsData.projects;

export default function formation() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <ProjectGrid projects={projects} showAllProjects={false} />
    </section>
  );
}
