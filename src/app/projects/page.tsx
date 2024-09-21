import ProjectComponentpage from '@/app/projects/components/page';
import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';

export default function page() {
  return (
    <>
      <NavBarSection />
      <ProjectComponentpage />
      <FooterSection />
    </>
  );
}
