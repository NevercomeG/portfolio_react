import React from 'react';

export default function P({ children }: { children?: React.ReactNode }) {
  return <p className='text-lg mb-6 leading-6 text-[#e2e1e1]'>{children}</p>;
}
