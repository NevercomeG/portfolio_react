'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function NavBarSection() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className='sticky top-0 z-50 w-full shadow backdrop-blur backdrop-brightness-50 font-sans font-bold'>
        <section className='sticky w-full animate-pulse h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-300 via-60% to-emerald-800 to-90%'></section>
        <div className='mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl'>
          <div>
            <div className='flex items-center justify-between py-3 md:block md:py-5'>
              <Link href='/'>
                <div className='name m-0 cursor-pointer p-0 text-4xl '>
                  <span className=' text-white  duration-200 ease-in'>
                    L<span className='text-green'>J</span>
                  </span>
                  <span className='text-yellow-300'>JS</span>
                </div>
              </Link>
              <div className='flex flex-row-reverse space-x-5 md:hidden'>
                <button
                  aria-label='menu'
                  className='text-gray-700 focus:border-gray-400 rounded-md p-2 outline-none focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-white'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg fond-bold'>
                <Link href='/projects' className='flex items-center'>
                  <BiChevronLeft className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
                  <span className='opacity-90 duration-200 ease-in  hover:text-green'>
                    Web developer
                  </span>
                  <BiChevronRight className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
                </Link>
                <Link href='/' className='flex items-center'>
                  <BiChevronLeft className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
                  <span className='opacity-90 duration-200 ease-in  hover:text-green'>
                    Video Editor
                  </span>
                  <BiChevronRight className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
                </Link>

                <Link href='/thumbnails' className='flex items-center'>
                  <BiChevronLeft className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
                  <span className='opacity-90 duration-200 ease-in hover:text-green'>
                    Thumbnails
                  </span>
                  <BiChevronRight className='inline opacity-0 duration-300 ease-in hover:text-green hover:opacity-100 md:text-2xl md:text-green md:opacity-100 md:duration-300 md:ease-in' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
