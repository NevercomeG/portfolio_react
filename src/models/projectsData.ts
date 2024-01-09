import projectsData from '@/models/projects.json';

import { Project } from "@/types/ProyectTypes";

export async function getProjectsData(): Promise<Project[]> {
  return Promise.resolve(projectsData.projects);
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjectsData();
  const projectsMap = new Map(projects.map(project => [project.id, project]));
  return projectsMap.get(id);
}
