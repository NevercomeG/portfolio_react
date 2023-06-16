import { projectsData } from '@/models/projectdata';

import ProjectGrid from './cards/projectGrid';

export default function Formation() {
  return <ProjectGridWrapper />;
}

function ProjectGridWrapper() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <ProjectGrid projects={projectsData} showAllProjects={false} />
    </section>
  );
}
