import VideosEditionPage from '@/app/videos/components/page';
import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';

export default function page() {
  return (
    <>
      <NavBarSection />
      <VideosEditionPage />
      <FooterSection />
    </>
  );
}
