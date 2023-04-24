import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { IoLogoLinkedin } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [servicesHovered, setServicesHovered] = useState(false);
  const [worksHovered, setWorksHovered] = useState(false);
  // const [notesHovered, setNotesHovered] = useState(false);
  const [contactsHovered, setContactsHovered] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [github, setgithub] = useState(false);
  const [below1050, setbelow1050] = useState(false);
  const [below950, setbelow950] = useState(false);
  const [below850, setbelow850] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const handleMouseEnter = () => {
    setServicesHovered(true);
  };

  const handleMouseLeave = () => {
    setServicesHovered(false);
  };
  const handleMouseEnter1 = () => {
    setWorksHovered(true);
  };

  const handleMouseLeave1 = () => {
    setWorksHovered(false);
  };
  // const handleMouseEnter2 = () => {
  //   setNotesHovered(true);
  // };

  // const handleMouseLeave2 = () => {
  //   setNotesHovered(false);
  // };
  const handleMouseEnter3 = () => {
    setContactsHovered(true);
  };

  const handleMouseLeave3 = () => {
    setContactsHovered(false);
  };
  const handleMouseEnter4 = () => {
    settwitter(true);
  };

  const handleMouseLeave4 = () => {
    settwitter(false);
  };
  const handleMouseEnter5 = () => {
    setgithub(true);
  };

  const handleMouseLeave5 = () => {
    setgithub(false);
  };

  useEffect(() => {
    function handleResize() {
      setbelow1050(window.innerWidth < 1050);
      setbelow950(window.innerWidth < 950);
      setbelow850(window.innerWidth < 850);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='font-Inter fixed left-0 top-0 z-50 flex w-full backdrop-blur backdrop-brightness-50 '>
      <div
        className={`relative flex h-20 items-center justify-between text-white ${
          below1050 ? 'w-full p-2' : 'm-auto w-11/12'
        } ${isMobile ? 'w-full bg-darkgray' : ''}`}
      >
        <Link href='/home'>
          <div
            className={`name m-0 cursor-pointer p-0 font-semibold ${
              below850 ? 'text-2xl' : 'text-3xl'
            }`}
          >
            <span className='font-Dm_Sans text-green  duration-200 ease-in'>
              LUIS{' '}
            </span>
            <span>CUEVAS</span>
          </div>
        </Link>
        <div
          className={`middle-nav font-Roboto_mono duration-300 ease-in ${
            isMobile
              ? 'absolute right-0 top-[-100px] z-40 mt-44 w-full bg-darkgray'
              : below850
              ? 'mt-[-500px] '
              : ''
          }`}
          onClick={() => setMobile(false)}
        >
          <ul
            className={`${
              below850
                ? ' block space-y-6 text-center'
                : 'flex items-center space-x-6'
            }`}
          >
            <Link
              href='#stack'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='flex items-center'
            >
              <BiChevronLeft
                className={`inline ${
                  servicesHovered
                    ? 'text-2xl text-green opacity-100 duration-300 ease-in'
                    : 'opacity-0 duration-300 ease-in'
                }`}
              />
              <span className='opacity-90 duration-200 ease-in hover:font-medium hover:text-green'>
                My Stack
              </span>
              <BiChevronRight
                className={`inline ${
                  servicesHovered
                    ? 'text-2xl text-green opacity-100 duration-300 ease-in'
                    : 'opacity-0 duration-300 ease-in'
                }`}
              />
            </Link>
            <Link
              href='#projects'
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              className='flex items-center'
            >
              <BiChevronLeft
                className={`inline ${
                  worksHovered
                    ? 'text-2xl text-green opacity-100 duration-300 ease-in'
                    : 'opacity-0 duration-300 ease-in'
                }`}
              />
              <span className='opacity-90 duration-200 ease-in hover:font-medium hover:text-green'>
                Projects
              </span>
              <BiChevronRight
                className={`inline ${
                  worksHovered
                    ? 'text-2xl text-green opacity-100 duration-300 ease-in'
                    : 'opacity-0 duration-300 ease-in'
                }`}
              />
            </Link>
            {/* <Link
              href='#testimonials'
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className='flex items-center'
            >
              <BiChevronLeft
                className={`inline ${
                  notesHovered
                    ? 'text-2xl text-green opacity-100 duration-300 ease-in'
                    : 'opacity-0 duration-300 ease-in'
                }`}
              />
              <span className='opacity-90 duration-200 ease-in hover:font-medium hover:text-green'>
                Testimonials
              </span>
              <BiChevronRight
                className={`inline ${
                  notesHovered
                    ? 'text-2xl text-green opacity-100 duration-300 ease-in'
                    : 'opacity-0 duration-300 ease-in'
                }`}
              />
            </Link> */}
            <Link
              href='#contact'
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              className='flex items-center'
            >
              <BiChevronLeft
                className={`inline ${
                  contactsHovered
                    ? 'text-2xl text-green opacity-100 duration-300 ease-in'
                    : 'opacity-0 duration-300 ease-in'
                }`}
              />
              <span className='opacity-90 duration-200 ease-in hover:font-medium hover:text-green'>
                Contacts
              </span>
              <BiChevronRight
                className={`inline ${
                  contactsHovered
                    ? 'text-2xl text-green opacity-100 duration-300 ease-in'
                    : 'opacity-0 duration-300 ease-in'
                }`}
              />
            </Link>
          </ul>
        </div>
        <div
          className={`end-nav flex items-center space-x-10  ${
            below950 ? 'space-x-5' : ''
          }`}
        >
          <a href='https://www.linkedin.com/in/luis-solano-a20683208/'>
            <div
              className='twitter flex cursor-pointer items-center space-x-2'
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              <IoLogoLinkedin
                className={`text-2xl ${twitter ? 'text-green' : ''}`}
              />{' '}
              <span
                className={` opacity-60 hover:opacity-100 ${
                  below950 ? 'hidden' : ''
                }`}
              >
                Linkedin
              </span>
            </div>
          </a>
          <a href='https://github.com/NevercomeX'>
            <div
              className='github flex cursor-pointer items-center space-x-2'
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            >
              <AiOutlineGithub
                className={`text-2xl ${github ? 'text-green' : ''}`}
              />{' '}
              <span
                className={`opacity-60 hover:opacity-100 ${
                  below950 ? 'hidden' : ''
                }`}
              >
                Github
              </span>
            </div>
          </a>
          <RxHamburgerMenu
            className={`${below850 ? 'block text-2xl' : 'hidden'}`}
            onClick={() => setMobile(!isMobile)}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
