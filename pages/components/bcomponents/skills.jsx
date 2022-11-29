import React from "react";
import Image from 'next/image';

export default function skills() {
  return (
    <section>
    <div class="services" id="services">
    <h1>My Skills</h1>
    <div class="services__wrapper">
      <div class="services__card">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="" />
      </div>
      <div class="services__card">

        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
      </div>
      <div class="services__card">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="" />

      </div>
      <div class="services__card">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"  alt=""/>

      </div>
      <div class="services__card">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" alt="" />

      </div>
      <div class="services__card">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="" />

      </div>
      <div class="services__card">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"  alt=""/>

      </div>
      <div class="services__card">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg"  alt=""/>
      </div>
    </div>
    </div>
    </section>


  );

}
