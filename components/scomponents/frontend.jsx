import React from "react";
import Image from "next/image";

export default function Frontend() {
  return (
    <section className="relative block py-10  ">
      <div className="grid lg:grid-flow-col items-center justify-center ">
        <div className="">
          <Image
            src="/assets/img/frontend.svg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="lg:pl-32 m-4 ">
          <h1 className="text-[50px] font-bold text-white font-mono ">
            Front-end Development
          </h1>
          <div className="py-6 space-y-6">
            <div className="grid grid-cols-4 lg:flex lg:flex-row lg:space-x-2">
              <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white ">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  width={45}
                  height={45}
                  alt="HTML"
                />
              </div>
              <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  width={45}
                  height={45}
                  alt=""
                />
              </div>
              <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  width={45}
                  height={45}
                  alt=""
                />
              </div>
              <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  width={45}
                  height={45}
                  alt=""
                />
              </div>
              <div className="py-2 lg:py-0 grid grid-flow-col space-x-5">
                <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>

                <div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <ul className=" space-y-3 font-mono ">
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
