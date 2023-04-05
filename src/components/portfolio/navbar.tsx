import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className=" fixed top-0  z-30 flex w-full flex-wrap items-center justify-between px-2 py-3 backdrop-blur  backdrop-brightness-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 ">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <a className="mr-4 inline-block  whitespace-nowrap py-2 text-xl font-bold uppercase leading-relaxed text-white">
            <Link href="/page2" passHref>
              LUIS CUEVA<span className="box_1 ">S</span>
            </Link>
          </a>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas  fa-bars text-white"></i>
          </button>
        </div>
        <div
          className={`grow items-center bg-white lg:flex lg:bg-transparent lg:shadow-none${
            navbarOpen ? ' block rounded shadow-lg' : ' hidden'
          }`}
          id="example-navbar-warning"
        >
          <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
            <li className="flex items-center">
              <a
                className="flex items-center px-3 py-4 text-xs font-bold uppercase text-gray-800 hover:text-gray-600 lg:py-2"
                href="https://www.linkedin.com/in/luis-solano-a20683208/"
              >
                <i className="fab fa-linkedin leading-lg text-xl text-white " />
                <span className="ml-2 inline-block lg:hidden">Linkedin</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className="flex items-center px-3 py-4 text-xs font-bold uppercase text-gray-800 hover:text-gray-600 lg:py-2"
                href="#"
              >
                <i className="fab fa-instagram leading-lg text-xl text-white" />
                <span className="ml-2 inline-block lg:hidden">Instagram</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="flex items-center px-3 py-4 text-xs font-bold uppercase text-gray-800 hover:text-gray-600 lg:py-2"
                href="https://github.com/NevercomeX"
              >
                <i className="fab fa-github leading-lg text-xl text-white " />
                <span className="ml-2 inline-block lg:hidden">Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
