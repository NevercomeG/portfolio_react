import VideoEditingGrid from '@/components/Cards/VideoEditingCards/VideoEditingGrid';
import { VideoData } from '@/models/videosData'; // Datos de thumbnails para YouTube
import { VideoType } from '@/types/VideoEditingTypes'; // Cambiar el tipo según tus necesidades

const videosEdition: VideoType[] = VideoData;

export default function VideosEditionPage() {
  return (
    <section className='flex justify-center flex-col items-center py-12 max-w-[68rem] ml-auto mr-auto w-[91%]'>
      <div className='w-full pb-4'>
        <h2 className='text-left text-2xl text-slate-100 '></h2>
      </div>
      <VideoEditingGrid
        Videos={videosEdition}
        showAllVideos={true}
        hidebutton
        hidepagination
      />
    </section>
  );
}
