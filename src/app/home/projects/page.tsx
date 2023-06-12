'use client';
import Layout from '@/components/global/layout/Layout';
import ProjectGrid from '@/components/portfolio/cards/projectGrid';
import { Project } from '@/components/portfolio/cards/types';

import projectsData from '@/models/projects.json';

const projects: Project[] = projectsData.projects;

export default function page() {
  return (
    <Layout>
      <section className='flex justify-center flex-col items-center py-12 max-w-[68rem] ml-auto mr-auto w-[91%]'>
        <div className='w-full'>
          <h1>
            <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green to-white'>
              My Projects
            </span>
          </h1>
        </div>
        <div className='w-full pb-4'>
          <h1 className='text-left text-2xl text-slate-100 '>
            Showcasing My Frontend Development Projects.
          </h1>
        </div>
        <ProjectGrid projects={projects} showAllProjects={true} />
      </section>
    </Layout>
  );
}
