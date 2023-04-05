import Image from 'next/image';
import React from 'react';

export default function Frontend() {
  return (
    <section className="relative block md:p-24  ">
      <div className="grid items-center  justify-center lg:grid-flow-col ">
        <div className="">
          <Image
            src="/assets/img/frontend.svg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="m-4 lg:pl-32 ">
          <h1 className="space-y-2 font-mono text-[50px] font-bold leading-none text-white ">
            Front-end Development
          </h1>
          <div className="space-y-2 py-4">
            <div className=" flex flex-row space-x-2">
              <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white ">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  width={45}
                  height={45}
                  alt="HTML"
                />
              </div>
              <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  width={45}
                  height={45}
                  alt=""
                />
              </div>
              <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  width={45}
                  height={45}
                  alt=""
                />
              </div>
              <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  width={45}
                  height={45}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row space-x-2 pb-6">
              <div className=" grid grid-flow-col space-x-2 lg:py-0">
                <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>

                <div className="grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <ul className=" space-y-3 font-mono text-white">
              <li>➖ HTML, CSS, JavaScript, TypeScript, etc.</li>
              <li>➖ Tailwind CSS, Bootstrap, Material UI, etc.</li>
              <li>➖ React, Next.js.</li>
              <li>➖ Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
