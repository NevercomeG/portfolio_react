import DevblogSection from '@/containers/home-page/devblog-section';
import FooterSection from '@/containers/home-page/footer-section';
import HeroSection from '@/containers/home-page/hero-section';
import ProjectsSection from '@/containers/home-page/project-section';
import StackSection from '@/containers/home-page/stacks-sections';

import NavbarSection from '../containers/home-page/navbar-section';

export default function Home() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <ProjectsSection />
      <DevblogSection />
      <StackSection />
      <FooterSection />
    </div>
  );
}
