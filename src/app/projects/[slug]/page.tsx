import { access, readFile } from 'fs/promises';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

import BlockQuote from '@/containers/portfolio-page/mdx/blockquote';
import H1 from '@/containers/portfolio-page/mdx/H1';
import H2 from '@/containers/portfolio-page/mdx/H2';
import HeroImage from '@/containers/portfolio-page/mdx/HeroImage';
import P from '@/containers/portfolio-page/mdx/P';

import Layout from './layout';

const POSTS_FOLDER = path.join(process.cwd(), '_posts');

async function readPostFile(slug: string) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' });
  return fileContent;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const markdown = await readPostFile(params.slug);

  if (!markdown) {
    notFound();
  }

  const { content } = await compileMDX<{ title: string }>({
    source: markdown,
    components: {
      h1: H1,
      h2: H2,
      p: P,
      HeroImage,
      blockquote: BlockQuote,
    },
    options: { parseFrontmatter: true },
  });

  return (
    <>
      <Layout>{content}</Layout>
    </>
  );
}
