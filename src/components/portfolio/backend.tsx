import Image from 'next/image';
import React from 'react';

export default function Backend() {
  return (
    <section className=" ">
      <div className="grid items-center justify-center lg:grid-flow-col ">
        <div className="m-4 lg:pr-28">
          <h1 className="font-mono text-[50px] font-bold leading-none text-white ">
            Back-End Development
          </h1>
          <div className="space-y-6 py-6  ">
            <div className="flex flex-row space-x-2 ">
              <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
            </div>
          </div>
          <ul className=" space-y-3 font-mono text-white">
            <li>➖ Node.js, Express, Django, etc.</li>
            <li>➖ MongoDB & MySQL.</li>
            <li>➖ REST API, GraphQL, etc.</li>
          </ul>
        </div>
        <div className="main__img--container">
          <div className="">
            <Image
              src="/assets/img/backend.svg"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
