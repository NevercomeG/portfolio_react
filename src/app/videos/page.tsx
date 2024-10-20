import VideosEditionPage from '@/app/videos/components/page';
import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';
import MainVideo from '@/components/Cards/VideoEditingCards/MainVideo';
import PricingPage from './components/Pricing/PricingPage';
import PaymentCarousel from '@/app/videos/components/Payment/PaymentCarousel';
import Questions from './components/Questions/Questions';
import SecurityAndGuarantees from '@/app/videos/components/Security/SecurityAndGuarantees';

export default function page() {
  return (
    <>
      <NavBarSection />

      <main className='container mx-auto p-8'>
        {/* Sección de Video Principal */}
        <section className='mb-12'>
          <h1 className='text-4xl font-bold mb-4 text-center'>Video Edition</h1>
          <div className='flex justify-center items-center '>
            <MainVideo />
          </div>
        </section>
      </main>

      <VideosEditionPage />
      <PricingPage />
      {/* <ComparePlans /> */}
      <PaymentCarousel />
      <SecurityAndGuarantees />
      <Questions />
      <FooterSection />
    </>
  );
}
