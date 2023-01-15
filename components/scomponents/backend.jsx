import React from "react";
import Image from "next/image";
export default function Backend() {
  return (
    <section className="relative block  ">
      <div className="grid lg:grid-flow-col items-center justify-center ">
        <div className="lg:pr-28 m-4">
          <h1 className="text-[50px] font-bold text-white ">
            Back-End Development
          </h1>
          <div className="py-6 space-y-6  ">
            <div className="flex flex-row space-x-2 ">
              <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
            </div>
          </div>
          <ul className=" space-y-3 ">
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
