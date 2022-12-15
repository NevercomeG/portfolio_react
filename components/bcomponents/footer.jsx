import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold mb-4">
              Thank you for considering me for your web development project.
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              I look forward to the opportunity to work with you and bring your
              website vision to life..
            </h5>
            <div className="mt-6 space-x-1">
              <a
                href="https://twitter.com/NevercomeG"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-gray-600 text-lg"
              >
                <button
                  className="bg-white text-blue-400 p-3 text-center inline-flex items-center justify-center w-10 h-10 mb-5 shadow-lg rounded-full"
                  type="button"
                >
                  <i className="flex fab fa-twitter"></i>
                </button>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-gray-600 text-lg"
              >
                <button
                  className="bg-white text-blue-500 p-3 text-center inline-flex items-center justify-center w-10 h-10 mb-5 shadow-lg rounded-full "
                  type="button"
                >
                  <i className="flex fab fa-facebook-square"></i>
                </button>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-gray-600 text-lg"
              >
                <button
                  className="bg-white text-orange-400 p-3 text-center inline-flex items-center justify-center w-10 h-10 mb-5 shadow-lg rounded-full "
                  type="button"
                >
                  <i className="flex fab fa-instagram"></i>
                </button>
              </a>
              <a
                href="https://github.com/NevercomeG"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-gray-600 text-lg"
              >
                <button
                  className="bg-white text-black p-3 text-center inline-flex items-center justify-center w-10 h-10 mb-5 shadow-lg rounded-full"
                  type="button"
                >
                  <i className="flex fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                    >
                      Contact Me
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free"
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} NevercomeG{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-gray-600 hover:text-gray-900"
              >
                Creative LS
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
