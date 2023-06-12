export type Project = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  Technology: {
    Stack: string[];
    Icons: string[];
  };
  links: {
    url: string;
    github: string;
    youtube: string;
  };
  featured: boolean;
  date: string;
  category: string;
};

export type Props = {
  projects: Project[];
  showAllProjects: boolean;
};

export type Ttestimonials = {
  name: string;
  position: string;
  idname: string;
  desc: string;
};
