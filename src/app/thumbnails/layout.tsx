import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarSection />
      <main className=''>{children}</main>
      <FooterSection />
    </>
  );
}
