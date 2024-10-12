'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import MDXComponents from '@/components/MDXComponents';
import NavBarSection from '@/components/Navs';
import FooterSection from '@/components/Footer';

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [source, setSource] = useState<any | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!slug) return;

    // Función para obtener el archivo .mdx desde GitHub raw
    const fetchPost = async () => {
      try {
        // Cambia esta URL para apuntar a tu repositorio de GitHub

        const GITHUB_RAW_URL = `https://raw.githubusercontent.com/NevercomeX/projectsmdx/refs/heads/main/${slug}.mdx`;

        const response = await fetch(GITHUB_RAW_URL);
        if (!response.ok) throw new Error('Post not found');

        const markdown = await response.text();
        const mdxSource = await serialize(markdown); // Serializa el markdown para renderizarlo con MDXRemote

        setSource(mdxSource);
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
    return <>Loading...</>;
  }

  return (
    <>
      <NavBarSection />
      <div className='px-8 sm:px-24 md:px-52 lg:px-1/8 flex flex-col justify-center'>
        <MDXRemote {...source} components={MDXComponents} />
      </div>
      <FooterSection />
    </>
  );
}
