import dynamic from 'next/dynamic';

import Button from '@/components/Buttons';

import { projectsData } from '@/models/projectdata';

const ProjectGrid = dynamic(
  () => import('@/components/Cards/ProjectCards/ProjectGrid'),
);

export default function Formation() {
  return <ProjectGridWrapper />;
}

function ProjectGridWrapper() {
  return (
    <section className='flex flex-col items-center justify-center '>
      <p className='pt-32 text-center pb-8 text-5xl text-white font-bold'>
        <span className='text-green'> My</span> Projects
      </p>

      <ProjectGrid
        projects={projectsData}
        showAllProjects={false}
        hidepagination={true}
      />
      <Button text='More projects' url='/projects/' />
    </section>
  );
}
