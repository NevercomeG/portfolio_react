import React, { useEffect, useState } from 'react';
import { BsQuote } from 'react-icons/bs';

import Client from '../../utils/client';

const testimonials = [
  {
    name: 'Logan Paul',
    position: 'Senior Manager',
    idname: 'LoganP',
    desc: " I was struggling with my website's frontend development until I stumbled upon this website. The team's expertise and knowledge of frontend technologies helped me create an outstanding website that exceeded my expectations. Their attention to detail and ability to communicate complex concepts in simple terms were impressive",
  },
  {
    name: 'Alisa J',
    position: 'Front-End Dev',
    idname: 'Alisa J',
    desc: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!",
  },
  {
    name: 'Salman',
    position: 'Marketing Assistence',
    idname: 'Sal',
    desc: 'I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible. The work is top-notch and I consistently outrank all my competitors on Google.',
  },
];

const Testimonials = () => {
  const [selectedClient, setSelectedClient] = useState(0);
  const [below1225, setlower1225] = useState(false);
  const [below850, setlower850] = useState(false);
  const [below630, setlower630] = useState(false);

  const handleClientClick = (index: number) => {
    setSelectedClient(index);
  };

  useEffect(() => {
    function handleResize() {
      setlower1225(window.innerWidth < 1225);
      setlower850(window.innerWidth < 850);
      setlower630(window.innerWidth < 630);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section
      id='testimonials'
      className={` m-auto mb-20 ${
        below1225 ? 'mt-20 w-10/12' : 'mt-32 w-8/12'
      }`}
    >
      <div
        className={` mb-20 font-Roboto_mono text-white  ${
          below1225 ? 'w-10/12' : 'w-8/12'
        } ${below850 ? '' : 'flex items-baseline justify-between'} `}
      >
        <h1 className={` mb-2 ${below850 ? 'text-3.5xl' : 'text-4xl'}`}>
          Testimonials
        </h1>
        <p className='opacity-70'>What&apos;s Clients say about me</p>
      </div>
      <div className=' testimonialBox relative bg-gray3 py-10 font-Roboto_mono text-white'>
        <div className={` m-auto ${below630 ? 'w-10/12' : 'w-8/12'}`}>
          <p className='mb-5 text-sm italic opacity-75'>
            Here is our clients thought
          </p>
          <p className='mb-5'>{testimonials[selectedClient].name}</p>
          <BsQuote
            className={`absolute right-10 top-6 rotate-180 text-6xl opacity-60 ${
              below630 ? 'hidden' : ''
            }`}
          />
          <p className='opacity-80'>{testimonials[selectedClient].desc}</p>
          <BsQuote
            className={` absolute left-5 rotate-180 -scale-x-100  transform text-6xl opacity-60 ${
              below1225 ? 'top-56' : 'top-48 '
            } ${below850 ? 'top-80' : ''} ${below630 ? 'hidden' : ''}`}
          />
        </div>
      </div>
      <div
        className={`clients text-white ${
          below850
            ? 'grid grid-cols-1 gap-6'
            : 'flex items-center justify-between'
        } ${below630 ? 'grid grid-cols-0 gap-6' : ''}`}
      >
        {testimonials.map((testimonial, index) => (
          <Client
            key={testimonial.idname}
            index={index}
            testimonial={testimonial}
            onClick={handleClientClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
