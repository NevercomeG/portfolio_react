import dynamic from 'next/dynamic';
import Button from '@/components/Buttons';
import { videos } from '@/models/videosData'; // Importa los videos

const Bloggrid = dynamic(
  () => import('@/components/Cards/DevblogCards/bloggrid'),
);

export function VideoList() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <p className='pt-32 text-center pb-8 text-5xl text-white font-bold'>
        <span className='text-green'> Video</span> Editing
      </p>
      {/* Pasa los videos como prop */}
      <Bloggrid articles={videos} showAllArticles={false} hidepagination />
      <Button text='See all videos' url='/videos/' hidebutton={true} />
    </section>
  );
}

export default VideoList;
