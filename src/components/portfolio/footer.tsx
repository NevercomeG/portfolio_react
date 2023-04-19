import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import {IoLogoLinkedin} from "react-icons/io"

import Nevercomex from "../global/nevercomex/copyright";

const Footer = () => {
  return (
    <section id="contact" className="bg-gray3 font-Dm_Sans">
      <div className="text-white flex flex-col items-center  py-16">
        <div className="w-36 h-12 border flex items-center justify-center my-8 hover:border-green cursor-pointer">
          <h1 className="text-2xl">Hire Me</h1>
        </div>
        <div className="icons flex space-x-10 text-3xl mb-8">
        <IoLogoLinkedin href="" className="cursor-pointer m-2 hover:text-green  ease-in duration-300"  />
          <AiOutlineGithub className="cursor-pointer m-2 hover:text-green  ease-in duration-300" />

        </div>
        <p className="tracking-wider text-center flex flex-col gap-2">
          All Rights are reserved  <Nevercomex/>
        </p>
      </div>
    </section>
  );
};

export default Footer;