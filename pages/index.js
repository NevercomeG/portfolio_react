import Image from 'next/image';
import Script from "next/script";
import Head from 'next/head.js';

import React from "react";

import Navbar from "./components/bcomponents/navbar.jsx";
import Footer from "./components/bcomponents/footer.jsx";
import Skills from './components/bcomponents/skills.jsx';
import Formation from './components/bcomponents/formation.jsx';
import Proyects2 from './components/bcomponents/proyects.jsx';

import Form from "./components/scomponents/form.jsx";

// import Leftpanel from "./components/scomponents/leftpanel.jsx";
// import Rightpanel from "./components/scomponents/rightpanel.jsx";



export default function Landing() {
  return (
    <>
      <Head>
        <title>NevercomeG Portfolio</title>
        <Script src="./components/scripts/proyects.js" crossOrigin="anonymous"></Script>
      </Head>
      <Navbar transparent />
      <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "100vh"
            }}>
          <div id='hero' className=" absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://weblium.com/blog/wp-content/uploads/2019/09/photo-1533135091724-62cc5402aa20.jpeg')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <h1 id='logotext' className="text-white font-bold text-4xl shadow-lg">
                      NEVERCOMEG PORTFOLIO
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Im a Full Stack Developer, I love to create new things and learn new technologies.
                      
                    </p>

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
            >
            </svg>
          </div>
        </div>
        <Skills />



        <section className="pb-20 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
       
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-4xl mb-2 font-semibold leading-normal">
                Welcome to my portfolio! 
                </h3>
                <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-gray-700">
                My name is Luis Javier and I am a Fullstack web developer with a passion for building modern and user-friendly websites. 
                I have a strong background in Frontend and Backend development, and I am always looking for new challenges and opportunities to grow as a developer. 
                </p>
                <p className="text-xl font-light leading-relaxed mt-0 mb-8 text-gray-700">
                Whether youre looking to revamp your existing website or build a new one from scratch, I have the skills and expertise to bring your vision to life. 
                From custom design and responsive layouts to intuitive navigation and engaging user experiences, I can help you create a website that is both visually appealing and technically sound.
                </p>
 
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-900">
                  <Image
                    alt="..."
                    src="/assets/img/3.png"
                    className="w-full align-middle rounded-t-lg"
                    width={'1024'}
                    height={'800'}
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-gray-900 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    I am proficient in a variety of coding languages, including HTML, CSS, JavaScript, and Python, 
                    and have experience working with popular frameworks such as <span className='underline '>React</span> and <span className='underline '>NextJS</span>. 
                    </p>
                    <p className="text-md font-light mt-6 text-white">
                    I also have a strong understanding of responsive design, ensuring that websites are optimized for different devices and screen sizes.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >

          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Image
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/assets/img/4.gif"
                  width={'800'}
                  height={'800'}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full text-black bg-white">
                    <i className="fas fa-rocket text-3xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                  As a fullstack web developer
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  I have a passion for building complex and dynamic web applications that deliver a seamless user experience. With over 7 years of experience in the field, 
                  I have gained a strong understanding of front-end and back-end technologies, as well as the latest industry trends.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-white mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                          Web development best practices
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-white mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Experience with modern web development frameworks</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-white mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Strong problem-solving skills and ability to work independently or as part of a team</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Formation />

        <Proyects2 />

        <section className="pt-20 pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Why you should work with me
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Provide potential clients and employers with a more comprehensive overview of the developers experience and capabilities.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                Hiring me as a full-stack developer
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                Allows you to benefit from my expertise in both front-end and back-end technologies, ensuring that your web development projects are completed with a holistic and comprehensive approach.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                My experience
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                Working on a range of web development projects allows me to bring a wealth of knowledge and expertise to your project, helping to ensure that it is delivered on time and within budget.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>      
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                As a proactive problem-solver
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                I enjoy collaborating with teams to find creative solutions to technical challenges, helping to ensure that your web development project runs smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>
{/* 
          <Leftpanel />
          <Rightpanel /> */}

        <Form/>
      </main>
      <Footer />

    </>
  );
}