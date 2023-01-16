import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "100vh",
        }}
      >
        <div
          id="hero"
          className=" absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://weblium.com/blog/wp-content/uploads/2019/09/photo-1533135091724-62cc5402aa20.jpeg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-25 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="lg:flex lg:flex-row lg:space-x-10 flex flex-col text-center items-center">
                <Image
                  src="/assets/img/8bitpix.png"
                  className="shadow-2xl border-solid border-green-800 rounded-full bg-black-50 backdrop-brightness-50 backdrop-blur-sm"
                  alt=""
                  width={"200"}
                  height={"200"}
                />

                <div className="lg:text-left   ">
                  <h1 className="text-white font-semibold text-6xl font-mono ">
                    LUIS
                  </h1>{" "}
                  <h1 className="text-white font-semibold text-6xl font-mono ">
                    CUEVA
                    <span className="box">S</span>
                  </h1>
                  <div className="pt-2">
                    <p className=" text-xl font-mono text-gray-300  text-bold ">
                      <Typewriter
                        options={{
                          strings: ["Full Stack Developer", "DevOps Engineer"],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                        }}
                      />
                    </p>
                    <p className="font-mono text-md text-gray-300 ">
                      Always learning new technologies. 💻
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          ></svg>
        </div>
      </div>
    </>
  );
};
export default Header;
