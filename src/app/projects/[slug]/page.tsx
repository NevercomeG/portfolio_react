import { access, readFile } from 'fs/promises';
import { MDXComponents } from 'mdx/types';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

// import Seo from '@/components/global/Seo';
// import Layout from '@/containers/portfolio-page/Layout';
import P from '@/containers/portfolio-page/mdx//P';
import BlockQuote from '@/containers/portfolio-page/mdx/blockquote';
import H1 from '@/containers/portfolio-page/mdx/H1';
import H2 from '@/containers/portfolio-page/mdx/H2';
import HeroImage from '@/containers/portfolio-page/mdx/HeroImage';
// Import your custom component here
// import Seo from '@/components/global/Seo';

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

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  // do something with frontmatter, like set metadata or whatever

  return (
    <>
      {/* Use your custom component here */}
      {content}
    </>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.

    h1: H1,
    h2: H2,
    p: P,
    HeroImage,
    blockquote: BlockQuote,

    ...components,
  };
}
// }

// export default function PostPage({
//   source,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <div>
//       <Seo templateTitle={source.frontmatter.title as string} />

//       <Layout>
//         <MDXRemote
//           {...source}
//           // specifying the custom MDX components
//           components={{
//             h1: H1,
//             h2: H2,
//             p: P,
//             HeroImage,
//             blockquote: BlockQuote,
//           }}
//         />
//       </Layout>
//     </div>
//   );
// }
