import axios from "axios";
import { NextResponse } from "next/server";

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


export async function GET (){
  try {
    const response = await axios.get(
      "https://dev.to/api/articles?username=marciofrayze&per_page=30"
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

    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    throw new Error("Failed to fetch data from dev.to API");
  }
}

