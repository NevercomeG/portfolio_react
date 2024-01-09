import dynamic from 'next/dynamic';

import Button from '@/components/Buttons';

const Bloggrid = dynamic(
  () => import('@/components/Cards/DevblogCards/bloggrid'),
);

export async function DevtoList() {
  const res = await fetch('https://dev.to/api/articles?username=nevercomex');
  const articles = await res.json();

  return (
    <section className='flex flex-col items-center justify-center'>
      <p className='pt-32 text-center pb-8 text-5xl text-white font-bold'>
        <span className='text-green'> Dev.to</span> Blogs
      </p>
      <Bloggrid articles={articles} showAllArticles={false} />
      <Button text='See all articles' url='/blogs/' hidebutton={false} />
    </section>
  );
}

export default DevtoList;
