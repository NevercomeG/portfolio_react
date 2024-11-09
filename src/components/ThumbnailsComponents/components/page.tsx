import ThumbnailsGrid from '@/components/ThumbnailsComponents/ThumbnailsGrid';
import { youtubeThumbsData } from '@/models/thumbsnail'; // Datos de thumbnails para YouTube
import { thumbnail } from '@/types/ThumbnailsTypes'; // Cambiar el tipo según tus necesidades

const youtubeThumbs: thumbnail[] = youtubeThumbsData;

export default function YouTubeThumbsPage() {
  return (
    <section className='flex justify-center flex-col items-center py-12 max-w-[68rem] ml-auto mr-auto w-[91%]'>
      <ThumbnailsGrid
        thumbnails={youtubeThumbs}
        showAllThumbnails={true} // Muestra todos los thumbnails
      />
    </section>
  );
}
