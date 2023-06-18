import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';

const Bloggrid = dynamic(
  () => import('@/components/portfolio/blog/cards/bloggrid')
);

import { DevToArticle } from '@/components/portfolio/types';

function DevtoList() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/getLatestpost');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className='flex flex-col items-center justify-center'>
      <Bloggrid
        articles={articles}
        showAllArticles={false}
        hidebutton={false}
      />
    </section>
  );
}

export default DevtoList;

export function Blogdata() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/getLatestpost');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return articles;
}
