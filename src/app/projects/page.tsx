import ProjectComponentpage from '@/app/projects/components/page';
import HeroSection from '@/components/Hero';
import SectionNavigation from '@/components/Navs/sectionNavigation';
import StackSection from '@/components/Stacks-Sections';

export default function page() {
  return (
    <>
      <SectionNavigation />
      <HeroSection />
      <ProjectComponentpage />
      <StackSection />
    </>
  );
}
