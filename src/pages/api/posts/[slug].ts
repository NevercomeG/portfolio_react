import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  
  try {
    const response = await fetch(`https://raw.githubusercontent.com/nevercomex/projects/main/_posts/${slug}.mdx`);
    
    if (!response.ok) throw new Error('Post not found');
    
    const fileContent = await response.text();
    res.status(200).json({ content: fileContent });
  } catch (err) {
    res.status(404).json({ error: 'Post not found' });
  }
}
