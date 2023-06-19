import React from 'react';

export default function H2({ children }: { children?: React.ReactNode }) {
  return <h2 className='text-left text-4xl mt-4 mb-2'>{children}</h2>;
}
