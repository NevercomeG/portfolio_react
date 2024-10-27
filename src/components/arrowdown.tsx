import Link from 'next/link';

const ArrowDown = () => {
  return (
    <Link href='#projects'>
      <div className='flex justify-center items-center pt-24'>
        <div className='animate-bounce ml-[-2.5rem] '>
          <div className='flex flex-col justify-center items-center '>
            <p className='text-3xl font-bold'>Projects</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-yellow-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={3}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArrowDown;
