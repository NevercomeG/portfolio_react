import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

import Layout from '@/components/global/layout/Layout';
import { Project } from '@/components/portfolio/cards/types';

import projectsData from '@/models/projects.json';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.projects.map((project: Project) => ({
    params: {
      projectId: project.id.toString(),
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectId = params?.projectId;
  const project = projectsData.projects.find(
    (p: Project) => p.id.toString() === projectId
  );
  return { props: { project } };
};

const ProjectDetailPage: React.FC<Project> = ({
  title,
  description,
  id,
  imageUrl,
  Technology,
  category,
}) => {
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

export default ProjectDetailPage;
