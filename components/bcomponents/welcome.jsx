import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="pb-20 font-mono">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap"></div>
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-4xl mb-2 font-semibold leading-normal">
              Welcome to my portfolio!
            </h3>
            <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-gray-200">
              My name is Luis Javier and I am a Fullstack web developer with a
              passion for building modern and user-friendly websites. I have a
              strong background in Frontend and Backend development, and I am
              always looking for new challenges and opportunities to grow as a
              developer.
            </p>
            <p className="text-xl font-light leading-relaxed mt-0 mb-8 text-gray-200">
              Whether youre looking to revamp your existing website or build a
              new one from scratch, I have the skills and expertise to bring
              your vision to life. From custom design and responsive layouts to
              intuitive navigation and engaging user experiences, I can help you
              create a website that is both visually appealing and technically
              sound.
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
              <Image
                alt="..."
                src="/assets/img/3.png"
                className="w-full align-middle rounded-t-lg"
                width={"1024"}
                height={"800"}
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: "95px",
                    top: "-94px",
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-gray-200 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-black">
                  Top Notch Services
                </h4>
                <p className="text-md  font-light mt-2 text-black">
                  I am proficient in a variety of coding languages, including
                  HTML, CSS, JavaScript, and Python, and have experience working
                  with popular frameworks such as{" "}
                  <span className="underline ">React</span> and{" "}
                  <span className="underline ">NextJS</span>.
                </p>
                <p className="text-md font-light mt-6 text-black">
                  I also have a strong understanding of responsive design,
                  ensuring that websites are optimized for different devices and
                  screen sizes.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
