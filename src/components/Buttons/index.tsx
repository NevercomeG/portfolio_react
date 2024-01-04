import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  url: string;
  hidebutton?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, url, hidebutton }) => {
  return (
    <div className='my-4 flex h-12 w-36 cursor-pointer items-center justify-center border hover:border-green text-white'>
      {!hidebutton && (
        <Link legacyBehavior aria-label='resume' href={url} passHref>
          <a className='text-2xl' target='_blank' rel='noopener noreferrer'>
            {text}
          </a>
        </Link>
      )}
    </div>
  );
};

export default Button;
