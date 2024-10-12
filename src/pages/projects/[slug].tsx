'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import MDXComponents from '@/components/MDXComponents';
import NavBarSection from '@/components/Navs';
import FooterSection from '@/components/Footer';
import Head from 'next/head';

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

  const formatSlugToTitle = (slug: string) => {
    return slug
      .split('-') // Divide el slug por guiones
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza la primera letra de cada palabra
      .join(' '); // Une las palabras de nuevo con espacios
  };

  // Establece un título y una descripción predeterminada (puede ser dinámico si tienes estos datos en el contenido)
  const title = `Projecto: ${formatSlugToTitle(slug as string)}`;
  const description = `Este es el post con el slug: ${slug}. Aprende más sobre este tema en nuestra página.`;
  const url = `https://ljjs.com/${slug}`;

  return (
    <>
      {/* Metadatos para SEO y redes sociales */}
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='article' />
        <meta
          property='og:image'
          content='https://tusitio.com/default-image.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta
          name='twitter:image'
          content='https://tusitio.com/default-image.png'
        />
      </Head>

      <NavBarSection />
      <div className='px-8 sm:px-24 md:px-52 lg:px-1/8 flex flex-col justify-center'>
        <MDXRemote {...source} components={MDXComponents} />
      </div>
      <FooterSection />
    </>
  );
}
