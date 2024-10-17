'use client';

import FooterSection from '@/components/Footer';
import NavBarSection from '@/components/Navs';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <NavBarSection />
      <main className='flex items-center justify-center min-h-screen bg-[#131313]'>
        <section className='flex flex-col items-center gap-8 md:gap-12 text-center py-10 md:py-28 w-full max-w-screen-lg px-6'>
          <h1 className='text-white text-3xl md:text-6xl font-bold'>
            Oops... It seems you're lost.
          </h1>
          <h2 className='text-secondaryColor text-4xl md:text-7xl font-bold'>
            404
          </h2>
          <p className='text-lg md:text-xl text-gray-400 max-w-xl'>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => router.push('/')} // Redirige a la página de inicio
            className='bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300'
          >
            Go to Homepage
          </button>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
