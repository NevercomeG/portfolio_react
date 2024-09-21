import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';
import DevblogSection from '@/containers/home-page/devblog-section';
import HeroSection from '@/containers/home-page/hero-section';
import ProjectsSection from '@/containers/home-page/project-section';
import StackSection from '@/containers/home-page/stacks-sections';

export default function Home() {
  return (
    <>
      <NavBarSection />
      <HeroSection />
      <ProjectsSection />
      <DevblogSection />
      <StackSection />
      <FooterSection />
    </>
  );
}
