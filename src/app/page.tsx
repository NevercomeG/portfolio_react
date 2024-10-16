import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';
import HeroSection from '@/components/Hero';
import ProjectsSection from '@/components/Projects-Sections';
import ThumbnailsSection from '@/components/Thumbsnail-Section';
import VideoEditingGrid from '@/components/VideoEditing-Section';
import StackSection from '@/components/Stacks-Sections';

export default function Home() {
  return (
    <>
      <NavBarSection />
      <HeroSection />
      <ProjectsSection />
      <ThumbnailsSection />
      <VideoEditingGrid />
      <StackSection />
      <FooterSection />
    </>
  );
}
