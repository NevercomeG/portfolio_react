import React from "react";
import Image from "next/image";

export default function formation() {
  return (
    <section className="bg-slate-900">      
        <div className="formation" id="formation">
        <h1  className="text-white font-bold text-5xl shadow-lg">
                  Formation                    </h1>
            <div className="formation__wrapper">
            <div className="formation__card">
            <Image
                  alt="..."
                  className="max-w-full"
                  src="/assets/img/alura.png"
                  width={'800'}
                  height={'800'}
                />
            </div>
            <div className="formation__card">
            <Image
                  alt="..."
                  className="max-w-full"
                  src="/assets/img/Udemy.png"
                  width={'800'}
                  height={'800'}
                />
            </div>
            <div className="formation__card">
            <Image
                  alt="..."
                  className="max-w-full "
                  src="/assets/img/microsoft-Logo.png"
                  width={'800'}
                  height={'800'}
                />
            </div>
            <div className="formation__card">
            <Image
                  alt="..."
                  className="max-w-full"
                  src="/assets/img/Platzi.png"
                  width={'800'}
                  height={'800'}
                />
                </div>
            </div>
        </div>
    </section>
    );
}
