import Image from 'next/image';
import React, { Fragment, useEffect,useState } from "react";
import {FaPython} from "react-icons/fa"
import {IoLogoNodejs} from "react-icons/io"
import {RiAngularjsLine} from "react-icons/ri"
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
        { !below1000 ? (
      <section className={` grid ${below1250 ? "grid-cols-1" : "grid-cols-2"} grid-cols-2 w-8/12 ${below1200 ? "w-11/12" : "w-10/12"} m-auto mt-24 font-Roboto_mono`}>
        <div className="text-elements inline-flex relative text-white flex-col">
          <div className={`w-2/3 ${below1300 ? "ml-0" : "ml-2"}`}>
            <div>
              <p className="work bg-green p-1 inline-block rounded-xl">
                Front-End Developer
              </p>
            </div>
            <div className={`head leading-12  ${below1200 ? "mt-4 mb-8 text-4xl" : "mt-12 mb-12 text-5xl"}`}>
              <p>Talk is Cheap</p>
              <p>Show me the Code</p>
            </div>
            <div className="desc text-base opacity-60 mb-10">
              <p>I design and code beautifully simple things</p>
              <p>and I love what I do.</p>
            </div>
            <h3 className={`uppercase text-green text-3xl underline underline-offset-4  ${below1200 ? "mb-10" : "mb-20"}`}>
              Let&apos;s Chat:
            </h3>
          </div>
          <div className="experience uppercase flex space-x-8 pb-7">
            <div className="year flex items-center">
              <p className={` mr-4 ${below1200 ? "text-4xl" : "text-5xl"}`}>12</p>
              <div className={`opacity-75 ${below1200 ? "text-sm" : "text-base"}`}>
                Years <p>of Experience</p>{" "}
              </div>
            </div>
            <div className="projects flex items-center justify-between">
              <p className={` mr-4 ${below1200 ? "text-4xl" : "text-5xl"}`}>165</p>
              <div className={`opacity-75 ${below1200 ? "text-sm" : "text-base"}`}>
                Project completed <p>with 18 companies</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" relative justify-center items-center flex">
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full text-center ">
              <div className="flex flex-col items-center text-center lg:flex lg:flex-row lg:space-x-10">
                <Image
                  src="/assets/img/8bitpix.png"
                  className="bg-black-50 rounded-full border-solid border-green-800 shadow-2xl backdrop-blur-sm backdrop-brightness-50"
                  alt=""
                  width="200"
                  height="200"
                />
                <div className="text-white lg:text-left   ">
                  <h1 className="font-mono text-5xl font-semibold leading-12 ">LUIS</h1>
                  <h1 className="font-mono text-5xl font-semibold leading-12  ">
                    CUEVA
                    <span className="box">S</span>
                  </h1>
                  <div className="pt-2 text-gray-300">
                    <p className=" text-bold font-mono text-xl   ">
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
                    <p className="text-md font-mono  ">
                      Always learning new technologies. 💻
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-auto w-full overflow-hidden"
          style={{ height: '70px' }}
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


      </section> ) 
      : 
      (
        <section className={` flex flex-col-reverse w-11/12 m-auto font-Roboto_mono`}>
        <div className={`text-elements relative text-white  w-10/12 m-auto ${below600 ? "w-11/12": ""}`}>
          <div className={`w-10/12 m-auto ${below600 ? "w-full": ""}`}>
            <div>
              <p className="work bg-green p-1 inline-block rounded-xl">
                Front-End Developer
              </p>
            </div>
            <div className={`head leading-12 mt-4 mb-8 ${below600 ? "text-3.5xl" : "text-4xl"}`}>
              <p>Talk is Cheap</p>
              <p>Show me the Code</p>
            </div>
            <div className="desc text-base opacity-60 mb-10">
              <p>I design and code beautifully simple things</p>
              <p>and I love what I do.</p>
            </div>
            <h3 className={`uppercase text-green text-3xl underline underline-offset-4"`}>
              Let&apos;s Chat:
            </h3>
          </div>
          <div className={`experience uppercase w-11/12 m-auto mt-7 pb-7 ${below600 ? "w-full float-left space-y-2": "flex space-x-8"}`}>
            <div className="year flex items-center">
              <p className={` mr-4 text-4xl`}>12</p>
              <div className="opacity-75 text-sm">
                Years <p>of Experience</p>
              </div>
            </div>
            <div className="projects flex items-center ">
              <p className={` mr-4 text-4xl`}>165</p>
              <div className="opacity-75 text-sm">
                Project completed <p>with 18 companies</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" image-elements relative mt-16 mb-20">
          <div className="flex justify-end items-center bg-gradient-primary-2 w-8/12 m-auto">
            <span className={`absolute bg-gray3 shadow-3xl w-8 h-8 flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-10 right-48"}`}>
                <FaPython className="text-2xl text-blue"/>
            </span>
            <span className={`absolute w-24 h-24 bg-gray2 shadow-2xl flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-60 right-16"}`}>
                <IoLogoNodejs className="text-6xl text-green"/>
            </span>
            <span className={`absolute  w-16 h-16 bg-darkgray shadow-xl flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-3/4 left-28"}`}>
                <RiAngularjsLine className="text-4xl text-red"/>
            </span>
            <div className=" flex content-center items-center justify-center w-1/2">
        </div>
        <div className="container relative mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full  text-center ">
              <div className="flex flex-col items-center text-center lg:flex lg:flex-row">
                <Image
                  src="/assets/img/8bitpix.png"
                  className="bg-black-50 rounded-full border-solid border-green-800 shadow-2xl backdrop-blur-sm backdrop-brightness-50"
                  alt=""
                  width="200"
                  height="200"
                />
                <div className="text-white lg:text-left   ">
                  <h1 className="font-mono text-6xl font-semibold ">LUIS</h1>{' '}
                  <h1 className="font-mono text-6xl font-semibold  ">
                    CUEVA
                    <span className="box">S</span>
                  </h1>
                  <div className="pt-2 text-gray-300">
                    <p className=" text-bold font-mono text-xl   ">
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
                    <p className="text-md font-mono  ">
                      Always learning new technologies. 💻
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-auto w-full overflow-hidden"
          style={{ height: '70px' }}
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