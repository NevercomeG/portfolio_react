import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-300 pb-6 pt-8 font-mono ">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-auto top-0 -mt-20 w-full overflow-hidden"
        style={{ height: '80px' }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="mb-4 text-3xl font-semibold">
              Thank you for considering me for your web development project.
            </h4>
            <h5 className="mb-2 mt-0 text-lg text-gray-700">
              I look forward to the opportunity to work with you and bring your
              website vision to life..
            </h5>
            <div className="mt-6 space-x-1">
              <a
                href="https://github.com/NevercomeX"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-gray-800 hover:text-gray-600"
              >
                <button
                  className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white p-3 text-center text-black shadow-lg"
                  type="button"
                >
                  <i className="fab fa-github flex"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="ml-auto w-full px-4 lg:w-4/12">
                <span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=""
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=""
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=""
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=""
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=""
                    >
                      Contact Me
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=""
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=""
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
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-600">
              Copyright © {new Date().getFullYear()} Luis Cuevas.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
