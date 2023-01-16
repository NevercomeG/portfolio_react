import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//

export default function formation() {
  return (
    <div className="bg-center bg-cover lg:flex lg:flex-col items-center justify-center p-5 -space-y-6 ">
      <div className="text-center">
        <h1 className="text-white font-bold text-5xl shadow-lg">Projects</h1>
        <h2 className="py-4">working in progress</h2>
      </div>
      {/* <div className=" lg:flex lg:flex-col justify-between py-20 hidden  ">
        <div className="lg:m-10 lg:h-[15rem] lg:w-[50rem] h-[10rem] w-[45rem] rounded-lg lg:flex lg:flex-row-reverse flex flex-col   items-center text-white bg-[#414141] border-[#313131] shadow-sm shadow-slate-200 ">
          <div className=" h-[15rem] w-[50rem]  flex flex-row">
            <Image
              src="/assets/img/encriptor.png"
              className=" rounded-br-lg rounded-tr-lg max-w-full h-auto align-middle  "
              alt=""
              width="1800"
              height="1800"
            />
          </div>
          <div className="flex flex-col justify-evenly space-y-9 m-10">
            <div className="flex flex-col text-2xl font-mono  text-center ">
              <h4 className=" text-4xl p-3">Encriptador</h4>
              <h1 className="text-base font-thin ">
                Freelance work done with Nextjs, where you can apply for remote
                job positions{" "}
              </h1>
            </div>

            <div className=" flex flex-row justify-center space-x-7 text-white font-bold text-3xl   ">
              <button className="bg-[#414141] hover:border-[white] w-40 h-12 rounded-lg space-x-10 border-[#212121]  border-2  ">
                {" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
              </button>
              <button className="bg-[#CA3E47] hover:border-[white] rounded-lg w-40 h-12 border-[#212121]  border-2   ">
                {" "}
                <h1 className=" font-bold">LIVE</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:flex lg:flex-col justify-center hidden  ">
        <div className="lg:m-10 h-[15rem] w-[50rem] rounded-lg flex flex-row  items-center text-white bg-[#414141] border-[#313131] shadow-sm shadow-slate-200 ">
          <div className=" h-[15rem] w-[50rem]  flex flex-row">
            <Image
              src="/assets/img/demo1.png"
              className=" rounded-bl-lg rounded-tl-lg max-w-full h-auto align-middle  "
              alt=""
              width="1800"
              height="0"
            />
          </div>
          <div className="flex flex-col justify-evenly space-y-9 m-10">
            <div className="flex flex-col text-2xl font-mono  text-center ">
              <h4 className=" text-4xl p-3">Encriptador</h4>
              <h1 className="text-base font-thin ">
                Freelance work done with Nextjs, where you can apply for remote
                job positions{" "}
              </h1>
            </div>

            <div className=" flex flex-row justify-center space-x-7 text-white font-bold text-3xl   ">
              <button className="bg-[#414141] hover:border-[white] w-40 h-12 rounded-lg space-x-10 border-[#212121]  border-2  ">
                {" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
              </button>
              <button className="bg-[#CA3E47] hover:border-[white] rounded-lg w-40 h-12 border-[#212121]  border-2   ">
                {" "}
                <h1 className=" font-bold">LIVE</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:flex lg:flex-col justify-center hidden">
        <div className="lg:m-10 h-[15rem] w-[50rem] rounded-lg flex flex-row-reverse  items-center text-white bg-[#414141] border-[#212121] shadow-sm shadow-slate-200 ">
          <div className=" h-[15rem] w-[50rem]  flex flex-row">
            <Image
              src="/assets/img/encriptor.png"
              className=" rounded-br-lg rounded-tr-lg max-w-full h-auto align-middle  "
              alt=""
              width="1800"
              height="0"
            />
          </div>
          <div className="flex flex-col justify-evenly space-y-9 m-10">
            <div className="flex flex-col text-2xl font-mono  text-center ">
              <h4 className=" text-4xl p-3">Encriptador</h4>
              <h1 className="text-base font-thin ">
                Freelance work done with Nextjs, where you can apply for remote
                job positions{" "}
              </h1>
            </div>

            <div className=" flex flex-row justify-center space-x-7 text-white font-bold text-3xl   ">
              <button className="bg-[#414141] hover:border-[white] w-40 h-12 rounded-lg space-x-10 border-[#212121]  border-2  ">
                {" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
              </button>
              <button className="bg-[#CA3E47] hover:border-[white] rounded-lg w-40 h-12 border-[#212121]  border-2   ">
                {" "}
                <h1 className=" font-bold">LIVE</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:flex lg:flex-col justify-center hidden">
        <div className="lg:m-10 h-[15rem] w-[50rem] rounded-lg flex flex-row  items-center text-white bg-[#414141] border-[#212121] shadow-sm shadow-slate-200 ">
          <div className=" h-[15rem] w-[50rem]  flex flex-row">
            <Image
              src="/assets/img/demo1.png"
              className=" rounded-bl-lg rounded-tl-lg max-w-full h-auto align-middle  "
              alt=""
              width="1800"
              height="0"
            />
          </div>
          <div className="flex flex-col justify-evenly space-y-9 m-10">
            <div className="flex flex-col text-2xl font-mono  text-center ">
              <h4 className=" text-4xl p-3">Encriptador</h4>
              <h1 className="text-base font-thin ">
                Freelance work done with Nextjs, where you can apply for remote
                job positions{" "}
              </h1>
            </div>

            <div className=" flex flex-row justify-center space-x-7 text-white font-bold text-3xl   ">
              <button className="bg-[#414141] hover:border-[white] w-40 h-12 rounded-lg space-x-10 border-[#212121]  border-2  ">
                {" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
              </button>
              <button className="bg-[#CA3E47] hover:border-[white] rounded-lg w-40 h-12 border-[#212121]  border-2   ">
                {" "}
                <h1 className=" font-bold">LIVE</h1>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
