import DevblogSection from '@/containers/home-page/devblog-section';
import HeroSection from '@/containers/home-page/hero-section';
import ProjectsSection from '@/containers/home-page/project-section';
import StackSection from '@/containers/home-page/stacks-sections';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <DevblogSection />
      <StackSection />
    </div>
  );
}
