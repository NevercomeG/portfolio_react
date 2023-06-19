import Image from 'next/image';
import React from 'react';

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className='relative w-full h-[600px]  mt-3 mb-4'>
      <Image
        className='rounded-xl object-center object-cover'
        src={src}
        alt={alt}
        fill
      ></Image>
    </div>
  );
}
