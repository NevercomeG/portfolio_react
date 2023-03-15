import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react';

export default function PopupWidget() {
  return (
    <div>
      <Disclosure>
        <>
          <a
            href='https://wa.me/573207383940'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Disclosure.Button className='ease fixed top-[36rem] right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition duration-300 hover:bg-green-600 focus:bg-green-600 focus:outline-none'>
              <div className='absolute h-8 w-8 text-white'>
                <Image
                  alt=''
                  height={100}
                  width={100}
                  src='https://img.icons8.com/color/240/null/whatsapp--v1.png'
                />
              </div>
            </Disclosure.Button>
          </a>
        </>
      </Disclosure>
    </div>
  );
}
