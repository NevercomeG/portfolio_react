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

type Props = {
  project: Project;
};

const ProjectDetailPage = ({ project }: Props) => {
  return (
    <Layout>
      <div>
        <h1>{project.title}</h1>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
        />
        <p>{project.description}</p>
      </div>
    </Layout>
  );
};

export default ProjectDetailPage;
