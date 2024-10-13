import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';
import HeroSection from '@/components/Hero';
import DevblogSection from '@/components/Thumbsnail-Section';
import ProjectsSection from '@/components/Projects-Sections';
import StackSection from '@/components/Stacks-Sections';

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
