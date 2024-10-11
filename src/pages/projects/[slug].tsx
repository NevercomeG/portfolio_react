import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import MDXComponents from '@/components/MDXComponents';
// import Loading from '@/components/Loading'; // Un componente para mostrar mientras carga

const POSTS_FOLDER = '/_posts'; // Localización de los archivos MDX en public/

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [content, setContent] = useState<string | null>(null);
  const [source, setSource] = useState<any | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!slug) return;

    // Fetch the MDX file dynamically from the public folder
    const fetchPost = async () => {
      try {
        const response = await fetch(`${POSTS_FOLDER}/${slug}.mdx`);
        if (!response.ok) throw new Error('Post not found');

        const markdown = await response.text();
        const mdxSource = await serialize(markdown);

        setSource(mdxSource);
        setContent(markdown);
      } catch (err) {
        setError(true);
      }
    };

    fetchPost();
  }, [slug]);

  if (error) {
    return <div>Post not found or an error occurred.</div>;
  }

  if (!source) {
    // return <Loading />; // Mostrar mientras se carga
    return <>Loading...</>;
  }

  return (
    <div>
      <MDXRemote {...source} components={MDXComponents} />
    </div>
  );
}
