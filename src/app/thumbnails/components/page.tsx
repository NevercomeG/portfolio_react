import ThumbnailsGrid from '@/components/Cards/ThumbnailsCards/ThumbnailsGrid';
import { youtubeThumbsData } from '@/models/thumbsnail'; // Datos de thumbnails para YouTube
import { thumbnail } from '@/types/ThumbnailsTypes'; // Cambiar el tipo según tus necesidades

const youtubeThumbs: thumbnail[] = youtubeThumbsData;

export default function YouTubeThumbsPage() {
  return (
    <section className='flex justify-center flex-col items-center py-12 max-w-[68rem] ml-auto mr-auto w-[91%]'>
      <div className='w-full'>
        <h1>
          <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green to-white'>
            YouTube Thumbnails
          </span>
        </h1>
      </div>
      <div className='w-full pb-4'>
        <h2 className='text-left text-2xl text-slate-100 '>
          Thumbnails I have designed for youtube video
        </h2>
      </div>
      <ThumbnailsGrid
        thumbnails={youtubeThumbs}
        showAllThumbnails={true} // Muestra todos los thumbnails
      />
    </section>
  );
}
