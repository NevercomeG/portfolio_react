import dynamic from 'next/dynamic';
import { VideoData } from '@/models/videosData'; // Importa los videos
import Button from '@/components/Buttons';

const VideoEditing = dynamic(
  () => import('@/components/VideoEditingComponents/VideoEditingGrid'),
);

export function ThumbnailsSection() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <p className='pt-32 text-center pb-8 text-5xl text-white font-bold'>
        <span className='text-green'> Videos</span> Editing
      </p>

      <VideoEditing Videos={VideoData} showAllVideos={false} hidepagination />
      <Button text='More videos' url='/videos/' />
    </section>
  );
}

export default ThumbnailsSection;
