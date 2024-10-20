import YouTubeThumbsPage from '@/app/thumbnails/components/page';
import PaymentCarousel from '@/app/thumbnails/components/Payment/PaymentCarousel';
import PricingPage from '@/app/thumbnails/components/Pricing/PricingPage';
import Questions from '@/app/thumbnails/components/Questions/Questions';
import SecurityAndGuarantees from '@/app/thumbnails/components/Security/SecurityAndGuarantees';
import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';
import ThumbnailSection from './components/ThumbnailSection';

export default function page() {
  return (
    <>
      <NavBarSection />
      <ThumbnailSection />
      <YouTubeThumbsPage />
      <PricingPage />
      {/* <ComparePlans /> */}
      <PaymentCarousel />
      <SecurityAndGuarantees />
      <Questions />
      <FooterSection />
    </>
  );
}
