import ProjectGrid from '@/components/Cards/ProjectCards/ProjectGrid';

import { projectsData } from '@/models/projectdata';

import { Project } from '@/types/ProyectTypes';

const projects: Project[] = projectsData;

export default function ProjectComponentpage() {
  return (
    <section className='flex justify-center flex-col items-center py-12 max-w-[68rem] ml-auto mr-auto w-[91%]'>
      <div className='w-full'></div>
      <ProjectGrid
        projects={projects}
        showAllProjects={true}
        hidebutton
        hidepagination
      />
    </section>
  );
}
