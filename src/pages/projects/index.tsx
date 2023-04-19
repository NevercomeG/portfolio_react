import { GetStaticProps } from 'next';

import ProjectGrid from '@/components/portfolio/cards/projectGrid';

import { Project } from './types/types';

type Props = {
  projects: Project[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Read the JSON data from the file system
  const data = await import('@/models/projects.json');
  const projects: Project[] = data.projects;

  return {
    props: {
      projects,
    },
  };
};

const ProjectsPage: React.FC<Props> = ({ projects }) => {
  return (
    <div>
      <h1>My Projects</h1>
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default ProjectsPage;
