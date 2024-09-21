import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';
import BlogpostComponent from '@/app/blogs/components/page';

export default function page() {
  return (
    <>
      <NavBarSection />
      <BlogpostComponent />
      <FooterSection />
    </>
  );
}
