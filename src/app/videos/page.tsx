import VideosEditionPage from '@/components/VideoEditingComponents/components/page';
// import MainVideo from '@/components/Cards/VideoEditingCards/MainVideo';
import PricingPage from '../../components/VideoEditingComponents/components/Pricing/PricingPage';
import PaymentCarousel from '@/components/VideoEditingComponents/components/Payment/PaymentCarousel';
import Questions from '../../components/VideoEditingComponents/components/Questions/Questions';
import SecurityAndGuarantees from '@/components/VideoEditingComponents/components/Security/SecurityAndGuarantees';

export default function page() {
  return (
    <>
      <main className='container mx-auto p-8'>
        {/* Sección de Video Principal */}
        <section className='mb-12'>
          <h1 className='text-4xl font-bold mb-4 text-center'>Video Edition</h1>
          <div className='flex justify-center items-center '>
            {/* <MainVideo /> */}
          </div>
        </section>
      </main>

      <VideosEditionPage />
      <PricingPage />
      {/* <ComparePlans /> */}
      <PaymentCarousel />
      <SecurityAndGuarantees />
      <Questions />
    </>
  );
}
