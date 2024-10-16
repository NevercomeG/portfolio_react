import dynamic from 'next/dynamic';
import { VideoData } from '@/models/videosData'; // Importa los videos

const VideoEditing = dynamic(
  () => import('@/components/Cards/VideoEditingCards/VideoEditingGrid'),
);

export function ThumbnailsSection() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <p className='pt-32 text-center pb-8 text-5xl text-white font-bold'>
        <span className='text-green'> Videos</span> Editing
      </p>

      <VideoEditing Videos={VideoData} showAllVideos={false} hidepagination />
    </section>
  );
}

export default ThumbnailsSection;
