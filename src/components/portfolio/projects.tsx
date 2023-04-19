import projectsData from '@/models/projects.json';

import ProjectGrid from './cards/projectGrid';
import { Project } from './cards/types';

const projects: Project[] = projectsData.projects;

export default function formation() {
  return (
    <section className='items-center justify-center -space-y-6 bg-cover bg-center p-5 lg:flex lg:flex-col '>
      <div className='text-center'>
        <h1 className='font-Roboto_mono text-5xl text-white shadow-lg'>
          Projects
        </h1>
      </div>

      <ProjectGrid projects={projects} />
    </section>
  );
}
