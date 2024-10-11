import { promises as fs } from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const POSTS_FOLDER = path.join(process.cwd(), '_posts');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  try {
    const filePath = path.join(POSTS_FOLDER, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    res.status(200).json({ content: fileContent });
  } catch (error) {
    res.status(404).json({ error: 'Post not found' });
  }
}
