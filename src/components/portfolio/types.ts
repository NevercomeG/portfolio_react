export type Projects = {
  projects: Project[];
}

export type Project = {
  id:          string;
  title:       string;
  imageUrl:    string;
  description: string;
  Technology:  Technology;
  links:       Links;
  featured:    boolean;
  date:        string;
  category:    string;
  tags?:       string[];
  image?:      string;
}

export type Technology = {
  Stack: string[];
  Icons: string[];
}

export type Links = {
  url:     string;
  github:  string;
  youtube: string;
}

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
