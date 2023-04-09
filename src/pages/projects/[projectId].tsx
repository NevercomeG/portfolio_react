import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import Layout from "@/components/global/layout/Layout";

import projectsData from "@/models/projects.json";

import { Project } from "./types/types";

type Props = {
  project: Project;
};

const ProjectDetailPage: React.FC<Props> = ({ project }) => {
  return (
    <Layout>
      <div>
        <h1>{project.title}</h1>
        <Image
          height={10000}
          width={10000}
          src={project.imageUrl}
          alt={project.title}
          className="w-96"
        />
        <p>{project.details}</p>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const projectId = params?.projectId as string;

  // Fetch project details from database or API
  const projectsData = await fetch("https://myapi.com/projects");
  const projectsJson = await projectsData.json();

  const project = projectsJson.projects.find((p: Project) => p.imageUrl === `/assets/img/${projectId}.png`);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all projects in projectsData
  const paths = projectsData.projects.map((p) => ({
    params: {
      projectId: p.imageUrl.substring(13, p.imageUrl.length - 4),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectDetailPage;
