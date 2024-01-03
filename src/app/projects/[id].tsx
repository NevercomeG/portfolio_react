import fs from 'fs';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';

import Seo from '@/components/global/Seo';
import Layout from '@/components/portfolio/projectmdx/Layout';
import BlockQuote from '@/components/portfolio/projectmdx/mdx/blockquote';
import H1 from '@/components/portfolio/projectmdx/mdx/H1';
import H2 from '@/components/portfolio/projectmdx/mdx/H2';
import HeroImage from '@/components/portfolio/projectmdx/mdx/HeroImage';
import P from '@/components/portfolio/projectmdx/mdx/P';

export default function PostPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Seo templateTitle={source.frontmatter.title as string} />

      <Layout>
        <MDXRemote
          {...source}
          // specifying the custom MDX components
          components={{
            h1: H1,
            h2: H2,
            p: P,
            HeroImage,
            blockquote: BlockQuote,
          }}
        />
      </Layout>
    </div>
  );
}
export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string;
  }>,
) {
  const slug = ctx.params?.slug || '';

  // retrieve the MDX blog post file associated
  // with the specified slug parameter
  const POSTS_DIRECTORY = '_posts';
  const postFile = await fs.readFileSync(`${POSTS_DIRECTORY}/${slug}.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
    },
    // enable ISR
    revalidate: 60,
  };
}
