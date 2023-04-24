import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';

import { Ttestimonials } from '@/components/portfolio/cards/types';

interface Clientprops {
  index: number;
  onClick: (index: number) => void;
  testimonial: Ttestimonials;
}

const Client: FC<Clientprops> = ({ index, onClick, testimonial }) => {
  const [selectedClient, setSelectedClient] = useState(false);
  const { name, position, idname } = testimonial;
  const [below1000, setlower1000] = useState(false);
  const [below850, setlower850] = useState(false);
  const [below630, setlower630] = useState(false);

  const handleClientClick = () => {
    setSelectedClient(!selectedClient);
    onClick(index);
  };

  useEffect(() => {
    function handleResize() {
      setlower1000(window.innerWidth < 1000);
      setlower850(window.innerWidth < 850);
      setlower630(window.innerWidth < 630);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className={`mt-10 flex w-10/12 items-center justify-evenly rounded-md border p-3 font-Dm_Sans  shadow-5xl transition duration-500 ease-in-out ${
        below850 ? 'w-full rounded-xl p-3 shadow-5xl' : 'w-2/6'
      } ${below630 ? 'w-10/12 rounded-xl p-3 shadow-5xl' : ''}`}
      onClick={handleClientClick}
    >
      <div className='img hidden lg:block'>
        <Image
          src={`/client${index + 1}.jpg`}
          alt='client'
          width={100}
          height={100}
          className='h-10 w-10 rounded-50 object-cover'
        />
      </div>
      <div className={`detail ${below1000 ? 'text-sm' : ''}`}>
        <p>{name}</p>
        <span>{position}</span>
        <span className='ml-2 text-green'>{idname}</span>
      </div>
    </div>
  );
};

export default Client;
