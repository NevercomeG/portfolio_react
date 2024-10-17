'use client'; // Indicador de que es un Client Component

import { useEffect } from 'react';
import NavBarSection from '@/components/Navs';
import FooterSection from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service, puedes implementar esto
    console.error(error);
  }, [error]);

  return (
    <>
      <NavBarSection />
      <section className='flex flex-col items-center justify-center min-h-screen bg-[#131313] text-white'>
        <div className='flex flex-col py-10 md:py-44 items-center gap-8 md:gap-12 w-full max-w-screen-md px-4 md:px-20'>
          <h2 className='text-3xl md:text-5xl text-red-600 font-bold'>
            Something went wrong ⚠️
          </h2>
          <p className='text-lg md:text-xl text-gray-300'>
            Oops! An unexpected error occurred. Please try refreshing the page
            or contact support if the problem persists.
          </p>
          <span className='text-gray-400 md:text-xl'>{error.message}</span>
          <button
            type='button'
            onClick={reset} // Permite reintentar la operación que causó el error
            className='mt-4 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300'
          >
            Try Again
          </button>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
