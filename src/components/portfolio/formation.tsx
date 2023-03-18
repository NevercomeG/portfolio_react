import Image from 'next/image';
import React from 'react';

export default function formation() {
  return (
    <section className=''>
      <div className='formation' id='formation'>
        <h1 className='text-5xl font-bold text-white shadow-lg'>Formation </h1>
        <div className='formation__wrapper'>
          <div className='formation__card'>
            <Image
              alt='...'
              className='max-w-full'
              src='/assets/img/alura.png'
              width='800'
              height='800'
            />
          </div>
          <div className='formation__card'>
            <Image
              alt='...'
              className='max-w-full'
              src='/assets/img/Udemy.png'
              width='800'
              height='800'
            />
          </div>
          <div className='formation__card'>
            <Image
              alt='...'
              className='max-w-full '
              src='/assets/img/Microsoft-Logo.png'
              width='800'
              height='800'
            />
          </div>
          <div className='formation__card'>
            <Image
              alt='...'
              className='max-w-full'
              src='/assets/img/platzi.png'
              width='800'
              height='800'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
