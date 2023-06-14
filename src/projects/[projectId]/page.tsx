'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { getProjectById } from '@/models/projectsData';

export default async function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId;

  const project = await getProjectById(projectId as string);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <section className='pb-24 pt-32'>
      <h1 className='p-4 text-lg'>{project.id}</h1>
      <div className='grid md:grid-cols-3 md:gap-3'>
        <div className='md:col-span-2'>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1000}
            height={1000}
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
            className='rounded-xl  '
          />
        </div>
        <div className='bg-slate-500'>
          <ul>
            <li className='pt-10'>Category: {project.category}</li>
            <li className='pt-10'>
              {project.category} of {project.category} reviews
            </li>
            <li className='pt-10'>Description: {project.description}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
