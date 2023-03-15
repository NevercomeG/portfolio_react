import Image from 'next/image';
import React from 'react';

export default function Devops() {
  return (
    <section className='relative block py-10   '>
      <div className='flex flex-col-reverse items-center justify-center  lg:grid lg:grid-flow-col '>
        <div className=''>
          <Image src='/assets/img/vercel.svg' width={500} height={500} alt='' />
        </div>
        <div className='m-4 lg:pl-44'>
          <h1 className='font-mono text-[50px] font-bold text-white '>
            DevOps
          </h1>
          <div className='space-y-6 py-6'>
            <div className=' flex flex-row space-x-2'>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg'
                  width={50}
                  height={50}
                  alt=''
                />
              </div>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                  width={50}
                  height={50}
                  alt=''
                />
              </div>
              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
                  width={50}
                  height={50}
                  alt=''
                />
              </div>

              <div className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white '>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg'
                  width={50}
                  height={50}
                  alt='googlecloud'
                />
              </div>
            </div>

            <ul className=' space-y-3 font-mono '>
              <li>➖ AWS, GCP, Azure, Digital Ocean, Heroku, Vercel, etc.</li>
              <li>➖ Docker, Kubernetes, Nginx, etc.</li>
              <li>➖ Github. </li>
              <li>➖ Linux & Windows.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
