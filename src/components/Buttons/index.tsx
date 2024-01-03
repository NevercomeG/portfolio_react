import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className='my-4 flex h-12 w-36 cursor-pointer items-center justify-center border hover:border-green'>
      <Link legacyBehavior aria-label='resume' href='/Resume.pdf' passHref>
        <a className='text-2xl' target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      </Link>
    </div>
  );
};

export default Button;
