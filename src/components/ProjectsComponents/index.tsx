import dynamic from 'next/dynamic';
import { projectsData } from '@/models/projectdata';

const ProjectGrid = dynamic(
  () => import('@/components/ProjectsComponents/ProjectGrid'),
);

export default function Formation() {
  return <ProjectGridWrapper />;
}

function ProjectGridWrapper() {
  return (
    <section className='flex flex-col items-center justify-center '>
      <ProjectGrid projects={projectsData} showAllProjects={false} />
    </section>
  );
}
