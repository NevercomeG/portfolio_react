import React from 'react';

export default function BlockQuote({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <blockquote className='text-left text-4xl mt-4 mb-4 border-l-4 border-lime-500 pl-4'>
      {children}
    </blockquote>
  );
}
