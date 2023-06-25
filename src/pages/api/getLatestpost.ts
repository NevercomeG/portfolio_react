import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import '@/styles/globals.css';

type DevToUser = {
  name: string;
  github_username: string;
};

type DevToArticle = {
  id: string;
  name: string;
  github_username: string;
  title: string;
  description: string;
  published_at: string;
  url: string;
  user: DevToUser;
  social_image: string;
};

export const getServerSideProps = async () => {
  const res = await fetch('https://dev.to/api/articles?username=dbredvick&per_page=30')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}


async function fetchDevToArticles(): Promise<DevToArticle[]> {
  try {
    const response = await axios.get(
      "https://dev.to/api/articles?username=dbredvick&per_page=30"
    );

    const articles: DevToArticle[] = response.data.map((article: DevToArticle) => ({
      id: article.id,
      name: article.user.name,
      github_username: article.user.github_username,
      title: article.title,
      description: article.description,
      url: article.url,
      published_at: new Date(article.published_at).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }
      ),
      social_image: article.social_image,
    }));

    return articles;
  } catch (error) {
    throw new Error("Failed to fetch data from dev.to API");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const articles = await fetchDevToArticles();
    req.headers["x-cache"] = "MISS";
    res.status(200).json(articles);
  } catch (error) {
    const errorMessage = (error as Error).message || "Unknown error";
    res.status(500).json({ error: errorMessage});
  }
}