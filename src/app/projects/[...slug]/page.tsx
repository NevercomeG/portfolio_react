
import Image from 'next/image';
import {notFound} from 'next/navigation';

import Layout from '@/components/global/layout/Layout';

import { getProjectById, getProjectsData } from '@/models/projectsData';

type Props = {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const projects = await getProjectsData(); //deduped!
  
  if (!projects) return []

  return projects.map((project) => ({
      projectid: project.id
  }))
}


export async function generateMetadata ({ params: {id} }: Props) {

  const project = await getProjectById(id);


  if (!project) {
    return {
      title: 'Post Not Found'
  }
}

return {
  title: project.title,
}

}


 export default async function ProjectDetailPage ({ params: {id} }: Props) {

  const datas = await getProjectById(id);

  if (!datas) {
    return notFound();
  }

  const { title, imageUrl, description, category } = datas;


  return (
    <Layout>
      <section className='pb-24 pt-32'>
        <h1 className='p-4 text-lg'>{title}</h1>
        <div className='grid md:grid-cols-3 md:gap-3'>
          <div className='md:col-span-2'>
            <Image
              src={imageUrl}
              alt={title}
              width={1000}
              height={1000}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
              className='rounded-xl  '
            ></Image>
          </div>
          <div className='bg-slate-500'>
            <ul>
              <li className='pt-10'>Category: {category}</li>
              <li className='pt-10'>Brand: {title}</li>
              <li className='pt-10'>
                {category} of {category} reviews
              </li>
              <li className='pt-10'>Description: {description}</li>
            </ul> 
          </div>
        </div>
      </section>
    </Layout>
  );
};


