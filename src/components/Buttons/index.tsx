import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  url: string;
  hidebutton?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, url, hidebutton }) => {
  return (
    <>
      {!hidebutton && (
        <Link aria-label={text} href={url} passHref className='text-2xl'>
          <div className='my-4 flex h-12 w-44 cursor-pointer items-center justify-center border hover:border-green text-white'>
            {text}
          </div>
        </Link>
      )}
    </>
  );
};

export default Button;
