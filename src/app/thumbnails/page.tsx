import YouTubeThumbsPage from '@/components/ThumbnailsComponents/components/page';
import PaymentCarousel from '@/components/ThumbnailsComponents/components/Payment/PaymentCarousel';
import PricingPage from '@/components/ThumbnailsComponents/components/Pricing/PricingPage';
import Questions from '@/components/ThumbnailsComponents/components/Questions/Questions';
import SecurityAndGuarantees from '@/components/ThumbnailsComponents/components/Security/SecurityAndGuarantees';
import ThumbnailSection from '../../components/ThumbnailsComponents/components/ThumbnailSection';

export default function page() {
  return (
    <>
      <ThumbnailSection />
      <YouTubeThumbsPage />
      <PricingPage />
      {/* <ComparePlans /> */}
      <PaymentCarousel />
      <SecurityAndGuarantees />
      <Questions />
    </>
  );
}
