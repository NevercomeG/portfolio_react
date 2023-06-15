import { NextApiRequest, NextApiResponse } from "next";


interface DevToArticle {
  id: string;
  name: string;
  github_username: string;
  title: string;
  description: string;
  url: string;
  user?: {
    name: string;
    github_username: string;
  };
}

async function fetchDevToArticles(): Promise<DevToArticle[]> {
  
  try {
    const response = await fetch(`https://dev.to/api/articles?username=nevercomex&per_page=31`);
    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Response from dev.to API is not an array');
    }

    const articles = data.map((article) => ({
      id: article.id,
      name: article.user.name,
      github_username: article.user.github_username,
      title: article.title,
      description: article.description,
      url: article.url,
      published_at: new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
      social_image: article.social_image,

    }));
    return articles;
  } catch (error) {
    // logger(error,'Error fetching data from dev.to API'); // suggestion 3
    throw new Error('Failed to fetch data from dev.to API');
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const articles = await fetchDevToArticles(); // suggestion 4
    req.headers['x-cache'] = 'MISS';
    res.status(200).json(articles);
  } catch (error: any) {
    res.status(500).json({ error: error.message});
  }
}