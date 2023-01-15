import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//

export default function formation() {
  return (
    <div className="bg-center bg-cover flex flex-col items-center justify-center p-20 bg-[#525252] space-y-8 ">
      <div className="text-center">
        <h1 className="text-white font-bold text-5xl shadow-lg">
          Github Projects
        </h1>
        <h2 className="py-4">working in progress</h2>
      </div>
      <div className="lg:grid lg:grid-cols-4 lg:grid-rows-1 flex flex-col  ">
        <div className="py-2 lg:m-10 lg:h-[400px] lg:w-[400px] h-[375px] w-[375px] rounded-lg flex flex-col justify-between items-center text-white bg-[#414141] border-[#313131] border-2 ">
          <div className="h-max  ">
            <Image
              src="/assets/img/encriptor.png"
              className=" rounded-tr-lg rounded-tl-lg "
              alt=""
              width={1879}
              height={939}
              loading="lazy"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-2xl font-mono">
            <h4 className=" text-4xl p-3">Encriptador</h4>
            <h1 className="text-base font-thin">Alura Challenge #1 </h1>
          </div>
          <div className=" flex flex-row justify-center space-x-7 text-white py-5 font-bold text-3xl  ">
            <button className="bg-[#414141] hover:border-[white] w-40 h-12 rounded-lg space-x-10 border-[#313131]  border-2  ">
              {" "}
              <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
            </button>
            <button className="bg-[#CA3E47] hover:border-[white] rounded-lg w-40 h-12 border-[#313131]  border-2   ">
              {" "}
              <h1 className=" font-bold">LIVE</h1>
            </button>
          </div>
        </div>
        <div className="py-2 lg:m-10  lg:h-[400px] lg:w-[400px] h-[375px] w-[375px]  rounded-lg flex flex-col justify-between items-center text-white bg-[#414141] border-[#313131] border-2 ">
          <div className="h-max  ">
            <Image
              src="/assets/img/encriptor.png"
              className=" rounded-tr-lg rounded-tl-lg "
              alt=""
              width={1879}
              height={939}
              loading="lazy"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-2xl font-mono">
            <h1>Alura Challenge #1 </h1>
            <h2>Encriptador</h2>
          </div>
          <div className=" flex flex-row justify-center space-x-7 text-white py-5 font-bold text-3xl  ">
            <button className="bg-[#414141] w-40 h-12 rounded-lg space-x-10 border-[#313131]  border-2  ">
              {" "}
              <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
            </button>
            <button className="bg-[#CA3E47] rounded-lg w-40 h-12 border-[#313131]  border-2   ">
              {" "}
              <h1 className=" font-bold">LIVE</h1>
            </button>
          </div>
        </div>
        <div className="py-2 lg:m-10  lg:h-[400px] lg:w-[400px] h-[375px] w-[375px]  rounded-lg flex flex-col justify-between items-center text-white bg-[#414141] border-[#313131] border-2 ">
          <div className="h-max  ">
            <Image
              src="/assets/img/encriptor.png"
              className=" rounded-tr-lg rounded-tl-lg "
              alt=""
              width={1879}
              height={939}
              loading="lazy"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-2xl font-mono">
            <h1>Alura Challenge #1 </h1>
            <h2>Encriptador</h2>
          </div>
          <div className=" flex flex-row justify-center space-x-7 text-white py-5 font-bold text-3xl  ">
            <button className="bg-[#414141] w-40 h-12 rounded-lg space-x-10 border-[#313131]  border-2  ">
              {" "}
              <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
            </button>
            <button className="bg-[#CA3E47] rounded-lg w-40 h-12 border-[#313131]  border-2   ">
              {" "}
              <h1 className=" font-bold">LIVE</h1>
            </button>
          </div>
        </div>
        <div className="py-2 lg:m-10  lg:h-[400px] lg:w-[400px] h-[375px] w-[375px]  rounded-lg flex flex-col justify-between items-center text-white bg-[#414141] border-[#313131] border-2 ">
          <div className="h-max  ">
            <Image
              src="/assets/img/encriptor.png"
              className=" rounded-tr-lg rounded-tl-lg "
              alt=""
              width={1879}
              height={939}
              loading="lazy"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-2xl font-mono">
            <h1>Alura Challenge #1 </h1>
            <h2>Encriptador</h2>
          </div>
          <div className=" flex flex-row justify-center space-x-7 text-white py-5 font-bold text-3xl  ">
            <button className="bg-[#414141] w-40 h-12 rounded-lg space-x-10 border-[#313131]  border-2  ">
              {" "}
              <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
            </button>
            <button className="bg-[#CA3E47] rounded-lg w-40 h-12 border-[#313131]  border-2   ">
              {" "}
              <h1 className=" font-bold">LIVE</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
