import ProjectComponentpage from '@/components/ProjectsComponents';
import HeroSection from '@/components/Hero';
import ScrollToTop from '@/components/Navs/ScrollToTop';
import StackSection from '@/components/ProjectsComponents/Stacks-Sections';

export default function page() {
  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <ProjectComponentpage />
      <StackSection />
    </>
  );
}
