import ProjectGrid from '@/components/Cards/ProjectCards/ProjectGrid';

import { projectsData } from '@/models/projectdata';

import { Project } from '@/types/ProyectTypes';

const projects: Project[] = projectsData;

export default function ProjectComponentpage() {
  return (
    <section className='flex justify-center flex-col items-center'>
      <ProjectGrid
        projects={projects}
        showAllProjects={true}
        hidebutton
        hidepagination
      />
    </section>
  );
}
