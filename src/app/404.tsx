import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

export default function NotFoundPage() {
  return (
    <main>
      <section className='bg-black'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-white'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow text-red-500 animate-flicker'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          Back to Home
        </div>
      </section>
    </main>
  );
}
