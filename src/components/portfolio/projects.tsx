import projectsData from '@/models/projects.json';

import ProjectGrid from './cards/projectGrid';
import { Project } from './cards/types';

const projects: Project[] = projectsData.projects;

export default function formation() {
  return (
    <section className='flex flex-row flex-1 justify-center'>
      <ProjectGrid projects={projects} />
    </section>
  );
}
