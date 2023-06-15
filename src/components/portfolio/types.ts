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

export type DevToArticle = {
  id: string;
  name: string;
  github_username: string;
  title: string;
  description: string;
  url: string;
  published_at: string;
  social_image: string;
};

export type DevToArticlesProps = {
  articles: DevToArticle[];
  showAllArticles: boolean;
}


export type ProjectProps = {
  projects: Project[];
  showAllProjects: boolean;
};

export type Ttestimonials = {
  name: string;
  position: string;
  idname: string;
  desc: string;
};
