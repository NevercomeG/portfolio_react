import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

// import heroImage from "../public/1.png";

const Hero = () => {
  const [below1300, setbelow1300] = useState(false);
  const [below1250, setbelow1250] = useState(false);
  const [below1200, setbelow1200] = useState(false);
  const [below1000, setbelow1000] = useState(false);
  const [below600, setbelow600] = useState(false);

  useEffect(() => {
    function handleResize() {
      setbelow1300(window.innerWidth < 1300);
      setbelow1250(window.innerWidth < 1250);
      setbelow1200(window.innerWidth < 1200);
      setbelow1000(window.innerWidth < 1000);
      setbelow600(window.innerWidth < 600);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Fragment>
      {!below1000 ? (
        <section
          className={` grid h-screen   ${
            below1250 ? 'grid-cols-1' : 'grid-cols-2'
          } w-8/12 grid-cols-2 ${
            below1200 ? 'w-11/12' : 'w-10/12'
          } m-auto my-36 font-Roboto_mono`}
        >
          <div className='text-elements  relative inline-flex flex-col text-white'>
            <div className={`w-4/5 ${below1300 ? 'ml-0' : 'ml-2'}`}>
              <div>
                <p className='work inline-block rounded-xl bg-green p-1'>
                  <Typewriter
                    options={{
                      strings: [
                        'Full Stack Developer',
                        'DevOps Engineer',
                        'Cloud Engineer',
                        'Software Engineer',
                        'Web Developer',
                        'Chemical Engineer',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                    }}
                  />
                </p>
              </div>
              <div
                className={`head leading-12  ${
                  below1200 ? 'mb-8 mt-4 text-4xl' : 'mb-12 mt-12 text-5xl'
                }`}
              >
                <p>Talk is Cheap</p>
                <p>Show me the Code</p>
              </div>
              <div className='desc mb-10 text-base opacity-60'>
                <p>I design and code beautifully simple things</p>
                <p>and I love what I do.</p>
              </div>
              <h3
                className={`text-3xl uppercase text-green underline underline-offset-4  ${
                  below1200 ? 'mb-10' : 'mb-20'
                }`}
              >
                Let&apos;s Chat:
              </h3>
            </div>
            <div className='experience flex space-x-8 pb-7 uppercase'>
              <div className='year flex items-center'>
                <p className={` mr-4 ${below1200 ? 'text-4xl' : 'text-5xl'}`}>
                  2
                </p>
                <div
                  className={`opacity-75 ${
                    below1200 ? 'text-sm' : 'text-base'
                  }`}
                >
                  Years <p>of Experience</p>{' '}
                </div>
              </div>
              <div className='projects flex items-center justify-between'>
                <p className={` mr-4 ${below1200 ? 'text-4xl' : 'text-5xl'}`}>
                  32
                </p>
                <div
                  className={`opacity-75 ${
                    below1200 ? 'text-sm' : 'text-base'
                  }`}
                >
                  Project completed <p> </p>
                </div>
              </div>
            </div>
          </div>
          <div className=' relative flex items-center justify-center pb-96'>
            <div className='container relative mx-auto'>
              <div className='flex flex-wrap items-center'>
                <div className='mx-auto w-full text-center '>
                  <div className='flex flex-row items-center text-center  lg:space-x-10'>
                    <Image
                      src='/assets/img/8bitpix.png'
                      className='bg-black-50 border-green-800 rounded-full border-solid shadow-2xl backdrop-blur-sm backdrop-brightness-50'
                      alt=''
                      width='200'
                      height='200'
                    />
                    <div className=' flex  '>
                      <h1 className='font-mono text-5xl    '>
                        LUIS
                        <span className='text-green'> CUEVAS</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='pointer-events-none absolute inset-x-0 bottom-0 top-auto w-full overflow-hidden'
              style={{ height: '70px' }}
            ></div>
          </div>
        </section>
      ) : (
        <section
          className={` m-auto flex h-screen w-11/12 flex-col-reverse items-center justify-center pb-16 font-Roboto_mono`}
        >
          <div className='container relative mx-auto '>
            <div className='flex flex-wrap items-center'>
              <div className='mx-auto w-full  text-center '>
                <div className='flex flex-col items-center text-center '>
                  <Image
                    src='/assets/img/8bitpix.png'
                    className='bg-black-50 border-green-800 rounded-full border-solid shadow-2xl backdrop-blur-sm backdrop-brightness-50'
                    alt=''
                    width='200'
                    height='200'
                  />
                  <div className='pt-10 text-white lg:text-left  '>
                    <h1 className='font-mono text-6xl font-semibold leading-12 '>
                      LUIS
                    </h1>{' '}
                    <h1 className='font-mono text-6xl font-semibold leading-12  '>
                      CUEVA
                      <span className='box'>S</span>
                    </h1>
                    <div className='text-gray-300 pt-2'>
                      <p className='work inline-block rounded-xl bg-green p-1'>
                        <Typewriter
                          options={{
                            strings: [
                              'Full Stack Developer',
                              'DevOps Engineer',
                              'Cloud Engineer',
                              'Software Engineer',
                              'Web Developer',
                              'Chemical Engineer',
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                          }}
                        />
                      </p>
                      <p className='text-md font-mono  '>
                        Always learning new technologies. 💻
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <span
            id="blackOverlay"
            className="absolute h-full w-full bg-black opacity-50"
          ></span>  */}
    </Fragment>
  );
};

export default Hero;
