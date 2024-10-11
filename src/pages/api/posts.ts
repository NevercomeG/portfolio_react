import { promises as fs } from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const POSTS_FOLDER = path.join(process.cwd(), '_posts');

// Obtener la lista de posts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filenames = await fs.readdir(POSTS_FOLDER);
    const posts = filenames.map((name) => ({
      slug: name.replace(/\.mdx?$/, ''),
    }));
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error reading posts' });
  }
}
