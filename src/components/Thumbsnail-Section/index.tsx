import dynamic from 'next/dynamic';
import Button from '@/components/Buttons';
import { youtubeThumbsData } from '@/models/thumbsnail'; // Importa los videos

const ThumbnailsGrid = dynamic(
  () => import('@/components/Cards/ThumbnailsCards/ThumbnailsGrid'),
);

export function ThumbnailsSection() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <p className='pt-32 text-center pb-8 text-5xl text-white font-bold'>
        <span className='text-green'> Thumbnail</span> Editing
      </p>
      <div className='mx-4 md:lg:mx-12'>
        <ThumbnailsGrid
          thumbnails={youtubeThumbsData}
          showAllThumbnails={false}
        />
      </div>
      <Button text='More thumbnails' url='/thumbnails/' />
    </section>
  );
}

export default ThumbnailsSection;
