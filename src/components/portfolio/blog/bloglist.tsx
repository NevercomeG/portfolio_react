import { useCallback, useEffect, useState } from 'react';

import Bloggrid from '@/components/portfolio/blog/cards/bloggrid';
import { DevToArticle } from '@/components/portfolio/types';

function DevtoList() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/getLatestpost');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className='flex flex-col items-center justify-center'>
      <Bloggrid articles={articles} showAllArticles={false} />
    </section>
  );
}

export default DevtoList;
