import React from 'react';

export default function H1({ children }: { children?: React.ReactNode }) {
  return (
    <h1 className='text-4xl lg:text-5xl font-bold text-white text-left pt-10'>
      {children}
    </h1>
  );
}
