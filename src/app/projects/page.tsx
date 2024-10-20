import ProjectComponentpage from '@/app/projects/components/page';
import FooterSection from '@/components/Footer';
import HeroSection from '@/components/Hero';
import NavBarSection from '@/components/Navs';
import StackSection from '@/components/Stacks-Sections';

export default function page() {
  return (
    <>
      <NavBarSection />
      <HeroSection />
      <ProjectComponentpage />
      <StackSection />
      <FooterSection />
    </>
  );
}
