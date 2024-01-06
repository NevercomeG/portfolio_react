'use client';

import { useCallback, useEffect, useState } from 'react';

import { getallpost } from '@/lib/endpoints';

import Bloggrid from '@/components/Cards/DevblogCards/bloggrid';

import { DevToArticle } from '@/types/ProyectTypes';

export default function page() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(getallpost);
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
    <>
      {/* <Layout> */}
      <section className='flex justify-center flex-col items-center py-12 max-w-[68rem] ml-auto mr-auto w-[91%]'>
        <div className='w-full'>
          <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green to-white'>
            All Blogs
          </h1>
        </div>
        <div className='w-full pb-4'>
          <h2 className='text-left text-2xl text-slate-100 '>
            Showcasing My Blogs.
          </h2>
        </div>
        <Bloggrid articles={articles} showAllArticles={false} />
      </section>
      {/* </Layout> */}
    </>
  );
}
