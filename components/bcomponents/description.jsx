import React from "react";
import Image from "next/image";

const description = () => {
  return (
    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <Image
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="/assets/img/4.gif"
              width={"800"}
              height={"800"}
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
                I have a passion for building complex and dynamic web
                applications that deliver a seamless user experience. With over
                7 years of experience in the field, I have gained a strong
                understanding of front-end and back-end technologies, as well as
                the latest industry trends.
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
                      <h4 className="text-gray-600">
                        Experience with modern web development frameworks
                      </h4>
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
                      <h4 className="text-gray-600">
                        Strong problem-solving skills and ability to work
                        independently or as part of a team
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default description;
